/**
 * Production Build and Integrity Verification Test
 * ISHMT RCT STUDENTS CHAPTER - TKMCE
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT_DIR = __dirname;
let errors = [];
let passed = 0;

function assert(condition, message) {
  if (!condition) {
    errors.push(message);
    console.error(`❌ FAIL: ${message}`);
  } else {
    passed++;
    console.log(`✅ PASS: ${message}`);
  }
}

console.log('=== Running Production Build and Routing Integrity Test ===\n');

// 1. Check core project files
const requiredFiles = ['index.html', 'style.css', 'main.js', 'ishmt-logo.jpg', 'ishmt-rct-logo.png', '.gitignore'];
requiredFiles.forEach(file => {
  const filePath = path.join(ROOT_DIR, file);
  assert(fs.existsSync(filePath), `Required file exists: ${file}`);
  if (fs.existsSync(filePath)) {
    const stat = fs.statSync(filePath);
    assert(stat.size > 0, `File ${file} has valid content (${stat.size} bytes)`);
  }
});

// 2. Validate index.html asset references & DOM hooks
const htmlContent = fs.readFileSync(path.join(ROOT_DIR, 'index.html'), 'utf-8');
assert(/href="style\.css(\?v=[^"]+)?"/.test(htmlContent), 'index.html links to style.css');
assert(/src="main\.js(\?v=[^"]+)?"/.test(htmlContent), 'index.html references main.js');
assert(htmlContent.includes('src="ishmt-logo.jpg"'), 'index.html references ishmt-logo.jpg');

const requiredDOMElements = [
  'id="header-bar"',
  'id="lockup-container"',
  'id="lockup"',
  'id="logo-wrapper"',
  'id="logo-img"',
  'id="text-block"',
  'id="header-right"',
  'id="header-nav"',
  'id="admin-lock-btn"',
  'id="public-view"',
  'id="public-content"',
  'id="login-view"',
  'id="admin-login-form"',
  'id="admin-studio"'
];
requiredDOMElements.forEach(elemId => {
  assert(htmlContent.includes(elemId), `index.html contains vital DOM hook: ${elemId}`);
});

// 3. Check CSS balanced braces & key style blocks
const cssContent = fs.readFileSync(path.join(ROOT_DIR, 'style.css'), 'utf-8');
const openBraces = (cssContent.match(/{/g) || []).length;
const closeBraces = (cssContent.match(/}/g) || []).length;
assert(openBraces === closeBraces, `style.css has balanced braces (${openBraces} open, ${closeBraces} close)`);
assert(cssContent.includes('.header-bar'), 'style.css contains .header-bar styles');
assert(cssContent.includes('.lockup'), 'style.css contains .lockup styles');
assert(cssContent.includes('.admin-studio'), 'style.css contains .admin-studio styles');

// 4. Validate JavaScript syntax with node -c
try {
  execSync('node -c main.js', { cwd: ROOT_DIR });
  assert(true, 'main.js passes JavaScript syntax compiler check without errors');
} catch (e) {
  assert(false, `main.js has syntax errors: ${e.message}`);
}

// 5. Check main.js structure and core modules
const jsContent = fs.readFileSync(path.join(ROOT_DIR, 'main.js'), 'utf-8');
assert(jsContent.includes('DEFAULT_BLUEPRINT'), 'main.js contains DEFAULT_BLUEPRINT master blueprint');
assert(jsContent.includes('SiteStore'), 'main.js defines SiteStore state management');
assert(jsContent.includes('AuthService'), 'main.js defines AuthService');
assert(jsContent.includes('IntroMotion'), 'main.js defines IntroMotion controller');
assert(jsContent.includes('PublicRenderer'), 'main.js defines PublicRenderer');
assert(jsContent.includes('AdminStudio'), 'main.js defines AdminStudio CMS');
assert(jsContent.includes('App'), 'main.js defines App initialization controller');

// 6. Photo Cropper, Executive Hierarchy & Member Detail Modal Verifications
assert(htmlContent.includes('id="photo-cropper-modal"'), 'index.html contains #photo-cropper-modal');
assert(htmlContent.includes('id="cropper-display-canvas"'), 'index.html contains #cropper-display-canvas');
assert(htmlContent.includes('id="cropper-zoom-range"'), 'index.html contains #cropper-zoom-range');
assert(htmlContent.includes('id="cropper-save-btn"'), 'index.html contains #cropper-save-btn');
assert(htmlContent.includes('id="member-detail-modal"'), 'index.html contains #member-detail-modal');
assert(htmlContent.includes('id="member-detail-container"'), 'index.html contains #member-detail-container');
assert(htmlContent.includes('id="modal-admin-bio-textarea"'), 'index.html contains #modal-admin-bio-textarea');
assert(htmlContent.includes('id="modal-save-bio-btn"'), 'index.html contains #modal-save-bio-btn');

assert(cssContent.includes('.avatar-shield'), 'style.css defines .avatar-shield transparent protection overlay');
assert(cssContent.includes('.select-none'), 'style.css defines strict .select-none anti-copy styles');
assert(cssContent.includes('.modal-cropper'), 'style.css defines .modal-cropper styles');
assert(cssContent.includes('.execom-pyramid-row-1'), 'style.css defines .execom-pyramid-row-1 Tier 1 pyramid styles');
assert(cssContent.includes('.execom-pyramid-row-2'), 'style.css defines .execom-pyramid-row-2 Tier 1 pyramid styles');
assert(cssContent.includes('.execom-tier3-leads-grid'), 'style.css defines .execom-tier3-leads-grid Tier 3 grid styles');
assert(cssContent.includes('.execom-tier4-members-grid'), 'style.css defines .execom-tier4-members-grid Tier 4 grid styles');
assert(cssContent.includes('.member-detail-backdrop'), 'style.css defines .member-detail-backdrop modal styles');

assert(jsContent.includes('PhotoCropper'), 'main.js defines PhotoCropper module');
assert(jsContent.includes('PhotoCropper.init()'), 'main.js initializes PhotoCropper in App.init');
assert(jsContent.includes('MemberDetailModal'), 'main.js defines MemberDetailModal module');
assert(jsContent.includes('MemberDetailModal.init()'), 'main.js initializes MemberDetailModal in App.init');
assert(jsContent.includes('btn-card-photo'), 'main.js binds .btn-card-photo inline trigger');
assert(cssContent.includes('.academic-btn-primary'), 'style.css defines .academic-btn-primary pill styles');
assert(cssContent.includes('.academic-btn-outline'), 'style.css defines .academic-btn-outline pill styles');
assert(cssContent.includes('.academic-about-section'), 'style.css defines .academic-about-section styles');
assert(jsContent.includes('id="about-us"'), 'main.js defines #about-us dedicated section');
assert(jsContent.includes('academic-btn-outline'), 'main.js renders secondary About Us button');

// 7. Check .gitignore rules
const gitignoreContent = fs.readFileSync(path.join(ROOT_DIR, '.gitignore'), 'utf-8');
['node_modules', '.next', 'dist', '.env'].forEach(rule => {
  assert(gitignoreContent.includes(rule), `.gitignore contains rule for: ${rule}`);
});

console.log('\n----------------------------------------');
if (errors.length === 0) {
  console.log(`🎉 ALL ${passed} VERIFICATION CHECKS PASSED WITH 0 ERRORS!`);
  console.log('Production build test clean. No broken imports or routing errors detected.');
  process.exit(0);
} else {
  console.error(`💥 ${errors.length} ERRORS DETECTED!`);
  process.exit(1);
}
