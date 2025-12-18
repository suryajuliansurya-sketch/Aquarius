document.addEventListener("DOMContentLoaded", () => {

    const content = {
        en: {
            aboutTitle: "About Me",
            aboutDesc: "I'm Surya, a student who loves technology, web development, animation, design, and creating beautiful digital experiences.",
            eduTitle: "Education",
            eduText: "I’m developing skills in web development, coding, and digital innovation.",
            hobbyTitle: "Hobbies",
            hobbyText: "Coding, drawing, designing websites, gaming, exploring tech.",
            goalTitle: "Goals",
            goalText: "Become a professional developer, create my own brand, and build useful apps for many people."
        },
        ar: {
            aboutTitle: "نبذة عني",
            aboutDesc: "أنا سوريا، طالب أحبّ التكنولوجيا، وتطوير الويب، والرسوم المتحركة، والتصميم، وصناعة تجارب رقمية جميلة.",
            eduTitle: "التعليم",
            eduText: "أطوّر مهاراتي في تطوير الويب، والبرمجة، والابتكار الرقمي.",
            hobbyTitle: "الهوايات",
            hobbyText: "البرمجة، الرسم، تصميم المواقع، الألعاب، واستكشاف التكنولوجيا.",
            goalTitle: "الأهداف",
            goalText: "أن أصبح مطورًا محترفًا، وأنشئ علامتي الخاصة، وأبني تطبيقات مفيدة للناس."
        },
        id: {
            aboutTitle: "Tentang Saya",
            aboutDesc: "Saya Surya, seorang pelajar yang menyukai teknologi, pengembangan web, animasi, desain, dan menciptakan pengalaman digital yang indah.",
            eduTitle: "Pendidikan",
            eduText: "Saya sedang mengembangkan kemampuan di bidang web development, coding, dan inovasi digital.",
            hobbyTitle: "Hobi",
            hobbyText: "Ngoding, menggambar, desain website, bermain game, dan eksplor teknologi.",
            goalTitle: "Tujuan",
            goalText: "Menjadi developer profesional, membuat brand sendiri, dan membangun aplikasi yang bermanfaat bagi banyak orang."
        }
    };

    const animated = document.querySelectorAll(".fade-slide");

    // Fungsi utama untuk mengganti bahasa
    function setLang(lang) {
        // Logika untuk animasi (jika ada)
        animated.forEach(el => el.classList.add("hide"));

        setTimeout(() => {
            // Loop untuk mengganti semua teks berdasarkan ID
            for (const key in content[lang]) {
                const el = document.getElementById(key);
                if (el) el.textContent = content[lang][key];
            }

            // Atur arah teks (kiri ke kanan atau kanan ke kiri untuk Arab)
            document.body.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

            // Hapus kelas hide untuk menampilkan kembali (jika ada animasi)
            animated.forEach(el => el.classList.remove("hide"));
        }, 300);
    }

    // Panggil fungsi ini saat halaman pertama dimuat (default English)
    setLang("en");

    // Ekspos fungsi setLang ke window agar bisa diakses dari tombol onclick di HTML
    window.setLang = setLang;
});

// Catatan: Semua kode lain yang tadi ada di luar DOMContentLoaded sudah saya hapus!
