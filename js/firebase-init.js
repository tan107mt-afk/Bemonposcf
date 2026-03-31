/* ═══════════════════════════════════════════════════
   ZENTEA – Firebase Configuration & Initialization
   Khởi tạo Firebase, fbAuth, fbDb
═══════════════════════════════════════════════════ */

// ── CẤU HÌNH FIREBASE ─────────────────────────────────────
// Vào https://console.firebase.google.com → tạo project → thêm web app → copy config vào đây
const FIREBASE_CONFIG = {
  apiKey:            "AIzaSyDKbXU5VR4o8nCz5rQlOXqnYWSyhHD5p1I",
  authDomain:        "zentea-qlch.firebaseapp.com",
  databaseURL:       "https://zentea-qlch-default-rtdb.firebaseio.com",
  projectId:         "zentea-qlch",
  storageBucket:     "zentea-qlch.firebasestorage.app",
  messagingSenderId: "1085565734491",
  appId:             "1:1085565734491:web:904b1ec407284c9a39b97e"
};
const FB_CONFIGURED = true; // Real Firebase config

// ── Danh sách mục menu có thể phân quyền ──
const NAV_SECTIONS = [
  {id:'checklist',      label:'✅ Checklist',         group:'qlch'},
  {id:'contacts',       label:'📞 Liên Hệ',           group:'qlch'},
  {id:'salary',         label:'💰 Lương Bậc',         group:'qlch'},
  {id:'violations',     label:'⚠️ Vi Phạm',           group:'qlch'},
  {id:'recipes',        label:'🧋 Công Thức',         group:'qlch'},
  {id:'employees',      label:'👥 Nhân Viên',         group:'qlch'},
  {id:'hr-eval',        label:'⭐ Đánh Giá NS',       group:'qlch'},
  {id:'schedule',       label:'📅 Lịch Làm Việc',    group:'qlch'},
  {id:'tinhhung',       label:'💬 Tình Huống',        group:'qlch'},
  {id:'waste-material', label:'♻️ Topping & NL Hủy', group:'qlch'},
  {id:'report-overview',label:'📈 Tổng Quan',         group:'qlch'},
  {id:'dt-test',        label:'📝 Tạo Đề Test',       group:'dt'},
  {id:'luu-tru',        label:'📁 Lưu Trữ TL',        group:'dt'},
  {id:'dt-vipham',      label:'⚖️ QT Vi Phạm',        group:'dt'},
  {id:'dt-quytrinh',    label:'📚 QT Đào Tạo',        group:'dt'},
  {id:'dt-baocao',      label:'📊 Báo Cáo ĐT',        group:'dt'},
];
// ── SUPERADMIN: Tài khoản Google của chủ hệ thống ──
const SUPERADMIN_EMAIL = 'tan107.mt@gmail.com'; // Thay bằng email Google của bạn
let fbApp = null, fbAuth = null, fbDb = null;
if (FB_CONFIGURED) {
  try {
    fbApp  = firebase.initializeApp(FIREBASE_CONFIG);
    fbAuth = firebase.auth();
    fbDb   = firebase.database();
    // Expose globally so main script can access
    window.fbApp  = fbApp;
    window.fbAuth = fbAuth;
    window.fbDb   = fbDb;
  } catch(e) { console.warn('Firebase init error:', e); }
}
window.FB_CONFIGURED = FB_CONFIGURED;