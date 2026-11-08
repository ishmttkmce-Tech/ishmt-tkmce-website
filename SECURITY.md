# ISHMT TKMCE Chapter - Security Architecture & Documentation

## 1. Authentication Architecture (Firebase Native Auth)
- **Engine**: Firebase Native Authentication with verified JWT ID tokens.
- **Client Endpoints**:
  - `#/login` - Enterprise email and password login page.
  - `#/admin` - Protected Admin Control Studio.
- **Security Features**:
  - No hardcoded passwords, hidden query URLs, or fake client-side `isAdmin` variables exist in the codebase.
  - Admin state is determined strictly by `firebase.auth().currentUser` and authenticated session tokens.
  - Route guards asynchronously wait for token validation (`AuthService.waitForAuthReady()`) before resolving route permissions.
  - Unauthorized visitors or bots attempting to reach `#/admin` are immediately blocked and bounced to `#/login`.
  - All admin UI elements (management panels, upload zones, edit/delete action buttons) are completely omitted from the DOM for public users.

---

## 2. Database Security Rules

### A. Firebase Realtime Database Rules (Current Setup)
Paste the following JSON rules into **Firebase Console > Realtime Database > Rules**:

```json
{
  "rules": {
    "ishmt_master_blueprint": {
      ".read": true,
      ".write": "auth != null"
    }
  }
}
```

- **Public Access (`.read: true`)**: Any visitor on phone, tablet, or PC can read the published site data, events, and gallery.
- **Admin Access (`.write: "auth != null"`)**: Only authenticated administrators with a valid Firebase user session can modify, insert, or delete data. Direct unauthorized API requests or curl commands will receive HTTP 401 Permission Denied.

---

### B. Cloud Firestore Security Rules (If Using Firestore)
Paste the following rules into **Firebase Console > Firestore Database > Rules**:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /ishmt_site/{docId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

---

### C. Supabase Row Level Security (SQL Snippet)
If migrating to Supabase PostgreSQL, run this script in the **Supabase SQL Editor**:

```sql
-- 1. Enable Row Level Security (RLS) on tables
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_blueprint ENABLE ROW LEVEL SECURITY;

-- 2. Public Read Policies (SELECT)
CREATE POLICY "Public Read Events" ON events 
  FOR SELECT USING (true);

CREATE POLICY "Public Read Gallery" ON gallery 
  FOR SELECT USING (true);

CREATE POLICY "Public Read Blueprint" ON site_blueprint 
  FOR SELECT USING (true);

-- 3. Authenticated Admin Policies (INSERT, UPDATE, DELETE)
CREATE POLICY "Admin Full Access Events" ON events 
  FOR ALL 
  TO authenticated 
  USING (true) 
  WITH CHECK (true);

CREATE POLICY "Admin Full Access Gallery" ON gallery 
  FOR ALL 
  TO authenticated 
  USING (true) 
  WITH CHECK (true);

CREATE POLICY "Admin Full Access Blueprint" ON site_blueprint 
  FOR ALL 
  TO authenticated 
  USING (true) 
  WITH CHECK (true);
```

---

## 3. How to Create an Admin User in Firebase
1. Open the [Firebase Console](https://console.firebase.google.com/).
2. Select your project: **`ishmt-tkmce`**.
3. In the left navigation menu, click **Authentication**.
4. In the **Sign-in method** tab, ensure **Email/Password** is enabled.
5. In the **Users** tab, click **Add user**.
6. Enter the Administrator Email (e.g. `admin@tkmce.ac.in`) and a strong, unique Master Password.
7. Click **Add user**. You can now log into `https://ishmt-tkmce-website.vercel.app/#/login` with these credentials.

---

## 4. API Key & Environment Variable Audit
- **Client-Side Keys**: Firebase configuration (`apiKey`, `authDomain`, `projectId`, `appId`, `databaseURL`) in `main.js` are public client identifiers. They identify the Firebase project to Google APIs and are safe to expose because backend data security is enforced by Firebase Auth and Database Rules.
- **Server-Side Secrets**: SMTP passwords, Resend email keys, and Vercel KV REST tokens are located strictly in `.env` and are never bundled into client scripts.
- **Serverless API Protection**: `/api/site-data` enforces `Authorization` bearer token checks for all incoming `POST` data mutations.
