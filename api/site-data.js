/**
 * Serverless API Endpoint: /api/site-data
 * ISHMT RCT STUDENTS CHAPTER - TKMCE
 * 
 * Provides centralized cloud persistence across all visitor devices (phones, tablets, PCs)
 * utilizing Vercel KV (Key-Value Redis) storage.
 */

module.exports = async function handler(req, res) {
  // Enable CORS & JSON headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Admin-Auth'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const kvUrl = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const kvToken = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

  const isConfigured = Boolean(kvUrl && kvToken);

  // GET: Fetch latest global blueprint & event data
  if (req.method === 'GET') {
    if (!isConfigured) {
      return res.status(200).json({
        success: true,
        connected: false,
        message: 'Vercel KV not yet provisioned. Site is using local storage fallback on this device.',
        hint: 'In Vercel Dashboard, go to Storage -> Create Database -> KV (Serverless Redis) -> Connect to Project.'
      });
    }

    try {
      const response = await fetch(`${kvUrl}/get/ishmt_master_blueprint`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${kvToken}`
        }
      });

      if (!response.ok) {
        throw new Error(`Vercel KV returned HTTP ${response.status}`);
      }

      const resultObj = await response.json();
      let rawData = resultObj.result;

      if (!rawData) {
        return res.status(200).json({
          success: true,
          connected: true,
          hasData: false,
          data: null,
          message: 'Connected to Vercel KV. No custom updates published yet.'
        });
      }

      // If stored as stringified JSON, parse it
      let parsedData = rawData;
      if (typeof rawData === 'string') {
        try {
          parsedData = JSON.parse(rawData);
        } catch (_) {
          parsedData = rawData;
        }
      }

      return res.status(200).json({
        success: true,
        connected: true,
        hasData: true,
        data: parsedData
      });
    } catch (err) {
      console.error('[API/site-data] GET error:', err);
      return res.status(200).json({
        success: false,
        connected: false,
        error: err.message
      });
    }
  }

  // POST: Admin publishes update to Vercel Cloud Database
  if (req.method === 'POST') {
    if (!isConfigured) {
      return res.status(200).json({
        success: false,
        connected: false,
        message: 'Vercel KV is not provisioned. To sync updates across all phones and PCs, go to your Vercel Dashboard > Storage > Create Database > KV.'
      });
    }

    try {
      const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
      const { blueprint, timestamp } = body || {};

      if (!blueprint) {
        return res.status(400).json({
          success: false,
          error: 'Missing required blueprint payload.'
        });
      }

      const payloadString = JSON.stringify(blueprint);

      // Save to Vercel KV using REST API
      const saveResponse = await fetch(`${kvUrl}/set/ishmt_master_blueprint`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${kvToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payloadString)
      });

      if (!saveResponse.ok) {
        throw new Error(`Vercel KV SET returned HTTP ${saveResponse.status}`);
      }

      return res.status(200).json({
        success: true,
        connected: true,
        updatedAt: timestamp || new Date().toISOString(),
        message: 'Blueprint synced live across all visitor devices via Vercel KV!'
      });
    } catch (err) {
      console.error('[API/site-data] POST error:', err);
      return res.status(500).json({
        success: false,
        connected: true,
        error: err.message
      });
    }
  }

  return res.status(405).json({ error: 'Method Not Allowed' });
};

