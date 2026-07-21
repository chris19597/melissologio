/* ==========================================================================
   Melissologio — lightweight i18n (default: Greek)
   Two mechanisms:
     1. [data-i18n="key"]   -> textContent replaced from the dictionary below
     2. [data-lang="el|en"] -> element shown only for the active language
   Language choice is persisted in localStorage.
   ========================================================================== */

const I18N = {
  el: {
    /* Navigation */
    "nav.brand": "Μελισσολόγιο",
    "nav.home": "Αρχική",
    "nav.features": "Λειτουργίες",
    "nav.guide": "Οδηγός",
    "nav.contact": "Επικοινωνία",
    "nav.privacy": "Πολιτική Απορρήτου",
    "nav.delete": "Διαγραφή Λογαριασμού",

    /* Home — screenshot showcase */
    "shots.h2": "Δείτε την εφαρμογή",
    "shots.sub": "Μια ματιά στο Μελισσολόγιο εν δράσει — με πραγματικά δεδομένα μελισσοκομείου.",
    "shots.cap.dash": "Πίνακας ελέγχου",
    "shots.cap.hive": "Καρτέλα κυψέλης",
    "shots.cap.insp": "Επιθεώρηση",
    "shots.cap.tasks": "Εργασίες",
    "shots.cap.apiary": "Μελισσοκομείο",

    /* Guide page */
    "guidepage.title": "Οδηγός — Μελισσολόγιο",
    "guidepage.h1": "Οδηγός χρήσης",
    "guidepage.subtitle": "Μια σύντομη ξενάγηση στις βασικές λειτουργίες του Μελισσολόγιου.",
    "guidepage.outro": "Μπορείτε να ανοίξετε ξανά αυτόν τον οδηγό μέσα από την εφαρμογή, από τις Ρυθμίσεις.",
    "g.dash.h": "Ο πίνακας ελέγχου σας",
    "g.dash.p": "Δείτε κάθε κυψέλη με μια ματιά. Οι κάρτες στην κορυφή δείχνουν ποιες κυψέλες χρειάζονται προσοχή, είναι έτοιμες για συγκομιδή, είναι αδύναμες ή εκπρόθεσμες — πατήστε μια κάρτα για να δείτε μόνο αυτές.",
    "g.hive.h": "Ανοίξτε μια κυψέλη",
    "g.hive.p": "Κάθε κυψέλη έχει τη δική της καρτέλα με την τελευταία κατάσταση, σημειώσεις, και καρτέλες με το ιστορικό επιθεωρήσεων και αγωγών. Μετονομάστε, μετακινήστε ή σημειώστε την ως παραφυάδα.",
    "g.insp.h": "Καταγράψτε επιθεωρήσεις",
    "g.insp.p": "Καταγράψτε βασίλισσα, γόνο, επίπεδα μελιού και γύρης, δύναμη μελισσιού, ιδιοσυγκρασία και ελέγχους ασθενειών. Η εφαρμογή τα χρησιμοποιεί για να επισημάνει ποιες κυψέλες χρειάζονται επίσκεψη.",
    "g.tasks.h": "Μείνετε ενήμεροι",
    "g.tasks.p": "Η καρτέλα «Εργασίες» συγκεντρώνει ό,τι χρειάζεται να γίνει — εκπρόθεσμοι έλεγχοι, ειδοποιήσεις και κυψέλες έτοιμες για συγκομιδή — ώστε να μην ξεφεύγει τίποτα.",
    "g.apiary.h": "Οργανώστε τα μελισσοκομεία",
    "g.apiary.p": "Ομαδοποιήστε τις κυψέλες σε μελισσοκομεία ανά τοποθεσία και φιλτράρετε τον πίνακα ελέγχου ανά μελισσοκομείο. Εφαρμόστε μια αγωγή σε ολόκληρο το μελισσοκομείο με μία κίνηση.",
    "g.map.h": "Τοποθεσία στον χάρτη",
    "g.map.p": "Ορίστε την ακριβή θέση κάθε μελισσοκομείου στον χάρτη ή μέσω GPS, και ανοίξτε πλοήγηση με ένα άγγιγμα.",
    "g.nfc.h": "Σαρώστε μια ετικέτα κυψέλης",
    "g.nfc.p": "Ακουμπήστε το κινητό σας σε μια ετικέτα NFC στην κυψέλη για να ανοίξετε αμέσως την καρτέλα της. Το NFC είναι προαιρετικό — μπορείτε πάντα να βρίσκετε κυψέλες χειροκίνητα.",

    /* Features page */
    "featpage.title": "Λειτουργίες — Μελισσολόγιο",
    "featpage.h1": "Λειτουργίες",
    "featpage.subtitle": "Όλα όσα προσφέρει το Μελισσολόγιο για τη διαχείριση του μελισσοκομείου σας.",
    "featpage.outro": "Λειτουργεί χωρίς σύνδεση και συγχρονίζεται αυτόματα. Σύντομα διαθέσιμο για Android.",

    "fp.dash.h": "Πίνακας ελέγχου",
    "fp.dash.p": "Συνολική εικόνα όλων των κυψελών με επίπεδα ειδοποίησης — επείγον, έτοιμη για συγκομιδή, αδύναμο μελίσσι, εκπρόθεσμο — καθώς και οι σημερινές επιθεωρήσεις.",
    "fp.hives.h": "Μελισσοκομεία & Κυψέλες",
    "fp.hives.p": "Δημιουργήστε και διαχειριστείτε πολλαπλά μελισσοκομεία, το καθένα με όσες κυψέλες θέλετε, και μετακινήστε κυψέλες μεταξύ τους. Τα ονόματα παραμένουν μοναδικά και ελέγχονται καθώς πληκτρολογείτε.",
    "fp.insp.h": "Επιθεωρήσεις",
    "fp.insp.p": "Καταγράψτε κατάσταση βασίλισσας, επίπεδα γόνου, μελιού και γύρης, δύναμη μελισσιού, ιδιοσυγκρασία, ανίχνευση ασθενειών και σημειώσεις. Δείτε παλαιότερες επιθεωρήσεις και επεξεργαστείτε την πιο πρόσφατη.",
    "fp.nfc.h": "Σάρωση NFC",
    "fp.nfc.p": "Ακουμπήστε το κινητό σε μια ετικέτα NFC στην κυψέλη για να ανοίξετε αμέσως το ιστορικό της ή να ξεκινήσετε νέα επιθεώρηση. Συνδέστε άγνωστες ετικέτες σε υπάρχουσες κυψέλες ή καταχωρίστε νέες.",
    "fp.gps.h": "Τοποθεσία GPS",
    "fp.gps.p": "Καταγράψτε ακριβείς συντεταγμένες GPS για κάθε μελισσοκομείο και ανοίξτε πλοήγηση στους Χάρτες Google με ένα άγγιγμα.",
    "fp.treat.h": "Ημερολόγιο αγωγών",
    "fp.treat.p": "Καταγράψτε αγωγές ανά κυψέλη — βαρρόα, νοσεμίαση, διατροφή, μυκητιακές, αντιβιοτικά και άλλα — με προϊόν, δόση, ημερομηνία και σημειώσεις. Εφαρμόστε μια αγωγή σε ολόκληρο το μελισσοκομείο με μία κίνηση.",
    "fp.nucleus.h": "Παραφυάδες",
    "fp.nucleus.p": "Σημειώστε μια κυψέλη ως παραφυάδα· εμφανίζεται με ξεχωριστή σήμανση σε κάθε λίστα και έχει δικό της φίλτρο στις εργασίες.",
    "fp.reminders.h": "Υπενθυμίσεις επιθεώρησης",
    "fp.reminders.p": "Προαιρετική καθημερινή ειδοποίηση που σας θυμίζει πόσες κυψέλες χρειάζονται επιθεώρηση. Η ώρα ρυθμίζεται και υπολογίζεται τοπικά, χωρίς σύνδεση.",
    "fp.tasks.h": "Εργασίες & ειδοποιήσεις",
    "fp.tasks.p": "Μείνετε ενήμεροι με ειδοποιήσεις για εκπρόθεσμες επιθεωρήσεις, αδύναμα μελίσσια και κυψέλες έτοιμες για συγκομιδή.",
    "fp.sync.h": "Λειτουργία εκτός σύνδεσης",
    "fp.sync.p": "Όλα αποθηκεύονται πρώτα τοπικά και συγχρονίζονται αυτόματα στο cloud στο παρασκήνιο όταν είστε συνδεδεμένοι, με επαναπροσπάθειες και ένδειξη εκτός σύνδεσης.",
    "fp.errors.h": "Ανάκτηση από σφάλματα",
    "fp.errors.p": "Σαφή, φιλικά μηνύματα σφάλματος με σταθερούς κωδικούς και κουμπί «Δοκιμή ξανά» — αντιγράψτε έναν κωδικό για να τον στείλετε στην υποστήριξη.",
    "fp.auth.h": "Σύνδεση",
    "fp.auth.p": "Σύνδεση με email και κωδικό ή με Google, με διαδικασία επαναφοράς κωδικού.",
    "fp.lang.h": "Ελληνικά & Αγγλικά",
    "fp.lang.p": "Πλήρης υποστήριξη ελληνικών και αγγλικών, με εναλλαγή ανά πάσα στιγμή. Τα ελληνικά είναι η προεπιλογή.",
    "fp.settings.h": "Σκοτεινό θέμα & ρυθμίσεις",
    "fp.settings.p": "Το σκοτεινό θέμα ακολουθεί το σύστημά σας, με φωτογραφία προφίλ, όνομα εμφάνισης, διάστημα επιθεώρησης και άλλα στις ρυθμίσεις.",

    /* Contact page */
    "contact.title": "Επικοινωνία — Μελισσολόγιο",
    "contact.h1": "Επικοινωνία",
    "contact.subtitle": "Αναφέρετε σφάλματα ή στείλτε προτάσεις — χαιρόμαστε να σας ακούσουμε.",
    "contact.intro": "Βρήκατε κάποιο σφάλμα ή έχετε μια ιδέα; Συμπληρώστε τη φόρμα και θα ανοίξει η εφαρμογή email σας με προσυμπληρωμένο το μήνυμα.",
    "form.name": "Όνομα (προαιρετικό)",
    "form.email": "Email (προαιρετικό)",
    "form.type": "Τύπος μηνύματος",
    "form.type.bug": "Αναφορά σφάλματος",
    "form.type.suggestion": "Πρόταση",
    "form.type.other": "Άλλο",
    "form.subject": "Θέμα",
    "form.subjectPh": "Σύντομη περίληψη",
    "form.message": "Μήνυμα",
    "form.messagePh": "Περιγράψτε το σφάλμα ή την πρότασή σας με όσο το δυνατόν περισσότερες λεπτομέρειες...",
    "form.submit": "Άνοιγμα email",
    "form.note": "Με την υποβολή, θα ανοίξει η εφαρμογή email σας με προσυμπληρωμένο το μήνυμα προς εμάς.",
    "form.altText": "Ή στείλτε μας απευθείας email:",
    "form.alert": "Παρακαλώ γράψτε ένα μήνυμα πριν την υποβολή.",

    /* Home — hero */
    "home.title": "Μελισσολόγιο — Ψηφιακό ημερολόγιο μελισσοκόμου",
    "hero.eyebrow": "Ψηφιακό ημερολόγιο μελισσοκόμου",
    "hero.h1": "Μελισσολόγιο",
    "hero.tagline": "Το ψηφιακό ημερολόγιο του μελισσοκόμου. Διαχειριστείτε κυψέλες, καταγράψτε επιθεωρήσεις και οργανώστε ολόκληρο το μελισσοκομείο σας από το κινητό σας.",
    "hero.ctaSmall": "Σύντομα στο",
    "hero.ctaStore": "Google Play",
    "hero.note": "Διαθέσιμο σύντομα για Android",

    /* Home — features */
    "features.h2": "Ό,τι χρειάζεται ο μελισσοκόμος",
    "features.sub": "Ένα εργαλείο για κάθε στάδιο της διαχείρισης του μελισσοκομείου σας.",

    "f.hives.h": "Διαχείριση Κυψελών",
    "f.hives.p": "Οργανώστε κάθε κυψέλη ανά μελισσοκομείο, με κατάσταση, βασίλισσα και ιστορικό με μια ματιά.",
    "f.insp.h": "Επιθεωρήσεις",
    "f.insp.p": "Καταγράψτε αναλυτικές επιθεωρήσεις: βασίλισσα, γόνο, μέλι, δύναμη, ασθένειες και σημειώσεις.",
    "f.nfc.h": "Ετικέτες NFC",
    "f.nfc.p": "Σαρώστε μια ετικέτα NFC στην κυψέλη και ανοίξτε αμέσως την καρτέλα της.",
    "f.treat.h": "Αγωγές",
    "f.treat.p": "Καταγράψτε αγωγές για βαρρόα και ασθένειες και παρακολουθήστε το πρόγραμμά τους.",
    "f.tasks.h": "Εργασίες",
    "f.tasks.p": "Προγραμματίστε και παρακολουθήστε εργασίες μελισσοκομείου ώστε να μην ξεχνάτε τίποτα.",
    "f.sync.h": "Συγχρονισμός Cloud",
    "f.sync.p": "Τα δεδομένα σας συγχρονίζονται με ασφάλεια στο cloud και σε όλες τις συσκευές σας.",

    /* Privacy */
    "privacy.title": "Πολιτική Απορρήτου — Μελισσολόγιο",
    "privacy.h1": "Πολιτική Απορρήτου",
    "privacy.subtitle": "Πώς διαχειριζόμαστε και προστατεύουμε τα δεδομένα σας.",

    /* Delete account */
    "delete.title": "Διαγραφή Λογαριασμού — Μελισσολόγιο",
    "delete.h1": "Διαγραφή Λογαριασμού",
    "delete.subtitle": "Ζητήστε τη διαγραφή του λογαριασμού και των δεδομένων σας.",

    /* Footer */
    "footer.copy": "© 2026 Μελισσολόγιο · Akimos",
  },

  en: {
    /* Navigation */
    "nav.brand": "Melissologio",
    "nav.home": "Home",
    "nav.features": "Features",
    "nav.guide": "Guide",
    "nav.contact": "Contact",
    "nav.privacy": "Privacy Policy",
    "nav.delete": "Delete Account",

    /* Home — screenshot showcase */
    "shots.h2": "See the app",
    "shots.sub": "A look at Melissologio in action — with real apiary data.",
    "shots.cap.dash": "Dashboard",
    "shots.cap.hive": "Hive detail",
    "shots.cap.insp": "Inspection",
    "shots.cap.tasks": "Tasks",
    "shots.cap.apiary": "Apiary",

    /* Guide page */
    "guidepage.title": "Guide — Melissologio",
    "guidepage.h1": "User guide",
    "guidepage.subtitle": "A quick tour of the main features of Melissologio.",
    "guidepage.outro": "You can reopen this guide any time from within the app, under Settings.",
    "g.dash.h": "Your dashboard",
    "g.dash.p": "See every hive at a glance. The cards at the top show hives that need attention, are ready for harvest, are weak, or are overdue — tap a card to see just those hives.",
    "g.hive.h": "Open a hive",
    "g.hive.p": "Every hive has its own record with the latest snapshot, notes, and tabs for its inspection and treatment history. Rename it, move it, or mark it as a nucleus.",
    "g.insp.h": "Log inspections",
    "g.insp.p": "Record queen, brood, honey and pollen levels, colony strength, temperament and disease checks. The app uses these to flag which hives need a visit.",
    "g.tasks.h": "Stay on top of tasks",
    "g.tasks.p": "The Tasks tab gathers everything that needs doing — overdue checks, alerts and hives ready for harvest — so nothing slips through.",
    "g.apiary.h": "Organize your apiaries",
    "g.apiary.p": "Group hives into apiaries by location and filter the dashboard by apiary. Apply one treatment to a whole apiary in a single step.",
    "g.map.h": "Pin it on the map",
    "g.map.p": "Set each apiary's exact location on the map or via GPS, and open navigation with a single tap.",
    "g.nfc.h": "Scan a hive tag",
    "g.nfc.p": "Hold your phone near an NFC tag on a hive to open its record instantly. NFC is optional — you can always find hives manually.",

    /* Features page */
    "featpage.title": "Features — Melissologio",
    "featpage.h1": "Features",
    "featpage.subtitle": "Everything Melissologio offers to manage your apiary.",
    "featpage.outro": "Works offline and syncs automatically. Coming soon for Android.",

    "fp.dash.h": "Dashboard",
    "fp.dash.p": "An at-a-glance overview of every hive with alert levels — urgent, harvest-ready, weak colony, overdue — plus today's inspection count.",
    "fp.hives.h": "Apiaries & Hives",
    "fp.hives.p": "Create and manage multiple apiaries, each with any number of hives, and move hives between them. Names stay unique and are validated as you type.",
    "fp.insp.h": "Inspections",
    "fp.insp.p": "Log queen status, brood, honey and pollen levels, colony strength, temperament, disease detection and notes. Review past inspections and edit the most recent one.",
    "fp.nfc.h": "NFC scanning",
    "fp.nfc.p": "Tap your phone to an NFC tag on a hive to instantly open its history or start a new inspection. Link unknown tags to existing hives or register new ones.",
    "fp.gps.h": "Apiary GPS location",
    "fp.gps.p": "Record precise GPS coordinates for each apiary and open Google Maps navigation with a single tap.",
    "fp.treat.h": "Treatment log",
    "fp.treat.p": "Record treatments per hive — Varroa, Nosema, nutrition, fungal, antibiotic and more — with product, dose, date and notes. Apply one treatment to a whole apiary in a single step.",
    "fp.nucleus.h": "Nucleus colonies",
    "fp.nucleus.p": "Mark a hive as a nucleus (split); it shows a distinct badge in every hive list and gets its own filter on the Tasks screen.",
    "fp.reminders.h": "Inspection reminders",
    "fp.reminders.p": "An optional daily notification reminding you how many hives need an inspection. The time is configurable and it's computed locally, with no network.",
    "fp.tasks.h": "Tasks & alerts",
    "fp.tasks.p": "Stay on top of what needs doing with alerts for overdue inspections, weak colonies and hives ready for harvest.",
    "fp.sync.h": "Offline-first sync",
    "fp.sync.p": "Everything is saved locally first and synced to the cloud automatically in the background when you're online, with retries and an offline indicator.",
    "fp.errors.h": "Error recovery",
    "fp.errors.p": "Clear, friendly error messages with stable error codes and a one-tap Try again — copy a code to share with support.",
    "fp.auth.h": "Sign-in",
    "fp.auth.p": "Email and password or Google sign-in, with a password reset flow.",
    "fp.lang.h": "Greek & English",
    "fp.lang.p": "Fully localised in Greek and English, switchable at any time. Greek is the default.",
    "fp.settings.h": "Dark mode & settings",
    "fp.settings.p": "Dark mode follows your system, with a profile photo, display name, inspection interval and more in settings.",

    /* Contact page */
    "contact.title": "Contact — Melissologio",
    "contact.h1": "Contact",
    "contact.subtitle": "Report a bug or send a suggestion — we'd love to hear from you.",
    "contact.intro": "Found a bug or have an idea? Fill in the form and your email app will open with the message ready to send.",
    "form.name": "Name (optional)",
    "form.email": "Email (optional)",
    "form.type": "Message type",
    "form.type.bug": "Bug report",
    "form.type.suggestion": "Suggestion",
    "form.type.other": "Other",
    "form.subject": "Subject",
    "form.subjectPh": "Short summary",
    "form.message": "Message",
    "form.messagePh": "Describe the bug or your suggestion in as much detail as possible...",
    "form.submit": "Open email",
    "form.note": "On submit, your email app will open with the message pre-filled and addressed to us.",
    "form.altText": "Or email us directly:",
    "form.alert": "Please write a message before submitting.",

    /* Home — hero */
    "home.title": "Melissologio — The beekeeper's digital logbook",
    "hero.eyebrow": "The beekeeper's digital logbook",
    "hero.h1": "Melissologio",
    "hero.tagline": "The beekeeper's digital logbook. Manage hives, record inspections and keep your entire apiary organized — right from your phone.",
    "hero.ctaSmall": "Coming soon on",
    "hero.ctaStore": "Google Play",
    "hero.note": "Available soon for Android",

    /* Home — features */
    "features.h2": "Everything a beekeeper needs",
    "features.sub": "One tool for every stage of managing your apiary.",

    "f.hives.h": "Hive Management",
    "f.hives.p": "Organize every hive by apiary, with status, queen and history at a glance.",
    "f.insp.h": "Inspections",
    "f.insp.p": "Record detailed inspections: queen, brood, honey, strength, diseases and notes.",
    "f.nfc.h": "NFC Tags",
    "f.nfc.p": "Scan an NFC tag on the hive to open its record instantly.",
    "f.treat.h": "Treatments",
    "f.treat.p": "Log varroa and disease treatments and keep track of their schedule.",
    "f.tasks.h": "Tasks",
    "f.tasks.p": "Plan and track apiary tasks so nothing gets forgotten.",
    "f.sync.h": "Cloud Sync",
    "f.sync.p": "Your data syncs securely to the cloud and across all your devices.",

    /* Privacy */
    "privacy.title": "Privacy Policy — Melissologio",
    "privacy.h1": "Privacy Policy",
    "privacy.subtitle": "How we handle and protect your data.",

    /* Delete account */
    "delete.title": "Delete Account — Melissologio",
    "delete.h1": "Delete Your Account",
    "delete.subtitle": "Request deletion of your account and all associated data.",

    /* Footer */
    "footer.copy": "© 2026 Melissologio · Akimos",
  },
};

function applyLang(lang) {
  const dict = I18N[lang] || I18N.el;

  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key] !== undefined) el.setAttribute("placeholder", dict[key]);
  });

  document.querySelectorAll("[data-lang]").forEach((el) => {
    // Explicit "block" (not "") so it overrides the CSS rule that hides the
    // English block before JS runs — otherwise "" would fall back to display:none.
    el.style.display = el.getAttribute("data-lang") === lang ? "block" : "none";
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-set-lang") === lang);
  });

  try { localStorage.setItem("lang", lang); } catch (e) { /* ignore */ }
}

function initNav() {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  // Close the menu after tapping a link
  links.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function initI18n() {
  let saved = "el";
  try { saved = localStorage.getItem("lang") || "el"; } catch (e) { /* ignore */ }

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => applyLang(btn.getAttribute("data-set-lang")));
  });

  applyLang(saved);
  initNav();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initI18n);
} else {
  initI18n();
}
