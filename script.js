// Datos de cursos (íconos, nombres, descripciones)
const coursesData = {
    courses: [
        { id: 1, name: "Aritmética", description: "Números, fracciones, operaciones básicas.", icon: "fas fa-calculator", color: "#e67e22" },
        { id: 2, name: "Álgebra", description: "Ecuaciones, polinomios, funciones.", icon: "fas fa-square-root-alt", color: "#e67e22" },
        { id: 3, name: "Biología", description: "Células, ecología, anatomía.", icon: "fas fa-dna", color: "#e67e22" },
        { id: 4, name: "Física", description: "Movimiento, fuerzas, energía.", icon: "fas fa-atom", color: "#e67e22" },
        { id: 5, name: "Geografía", description: "Relieve, clima, recursos.", icon: "fas fa-globe-americas", color: "#e67e22" },
        { id: 6, name: "Geometría", description: "Figuras, medidas, propiedades.", icon: "fas fa-draw-polygon", color: "#e67e22" },
        { id: 7, name: "Historia del Perú", description: "Culturas, incas, república.", icon: "fas fa-landmark", color: "#e67e22" },
        { id: 8, name: "Historia Universal", description: "Edades, guerras, civilizaciones.", icon: "fas fa-monument", color: "#e67e22" },
        { id: 9, name: "Inglés", description: "Gramática, vocabulario, listening.", icon: "fas fa-language", color: "#e67e22" },
        { id: 10, name: "Lenguaje", description: "Gramática, comunicación, lectura.", icon: "fas fa-spell-check", color: "#e67e22" },
        { id: 11, name: "Literatura", description: "Géneros, autores, análisis.", icon: "fas fa-book-open", color: "#e67e22" },
        { id: 12, name: "Psicología", description: "Mente, emociones, conducta.", icon: "fas fa-brain", color: "#e67e22" },
        { id: 13, name: "Química", description: "Elementos, reacciones, tabla.", icon: "fas fa-flask", color: "#e67e22" },
        { id: 14, name: "Razonamiento Matemático", description: "Lógica, secuencias, patrones.", icon: "fas fa-puzzle-piece", color: "#e67e22" },
        { id: 15, name: "Razonamiento Verbal", description: "Sinónimos, analogías, comprensión.", icon: "fas fa-comment-alt", color: "#e67e22" },
        { id: 16, name: "Trigonometría", description: "Triángulos, funciones, identidades.", icon: "fas fa-shapes", color: "#e67e22" },
        { id: 17, name: "Economía", description: "Oferta, demanda, mercado.", icon: "fas fa-chart-line", color: "#e67e22" }
    ],
    selectors: {
        tomos: [
            { id: "tomo-i", name: "TOMO I", icon: "fas fa-book" },
            { id: "tomo-ii", name: "TOMO II", icon: "fas fa-book" }
        ],
        intensivos: []  // ← Corregido: se añade un arreglo vacío para evitar errores
    },
    // Enlaces de ejemplo para Verano 2026 y 2027 (reemplaza con los reales)
    driveLinks: {
        "tomo-i": {
            2026: { 1: "https://drive.google.com/drive/folders/1g5rx6ItcDBJAAmmppjfMTROfrq1_OE7D?usp=drive_link",  //Aritmética
                    2: "https://drive.google.com/drive/folders/1ka9iJYtcY6ysITo4RfCNas48oKSyY9FT?usp=drive_link", //alg
                    3: "https://drive.google.com/drive/folders/1F6a8WLqSp-9KOK4VyYp2wGrTLWpAsJ8e?usp=drive_link",  //bio
                    4: "https://drive.google.com/drive/folders/1xfMngQh_ph-nSuq8Gsq3ISlQ-oMc1ViU?usp=drive_link",  //fis 
                    5: "https://drive.google.com/drive/folders/1E1L3zrEO_mutlPGTENAt_OGoIJpD0-j_?usp=drive_link",  //geo
                    6: "https://drive.google.com/drive/folders/1anpnUV5gDwg0lILyQhIyASD7xuJg1gqI?usp=drive_link",  //gmt
                    7: "https://drive.google.com/drive/folders/11veYrrL8Di9-_afgrdjX26xlGZSrNX4H?usp=drive_link",  //hp
                    8: "https://drive.google.com/drive/folders/1_k8pWUxo4uF-wPyM-gO-Ixnc2Ef569Yy?usp=drive_link",  //hu
                    9: "#",    //ing
                    10: "https://drive.google.com/drive/folders/14NI2n9mIDGkyR_w668AkaujunAKukEpE?usp=drive_link",  //len
                    11: "https://drive.google.com/drive/folders/1ET6uk0gRMUUOHNItR6nw7i5Y3F1_VinK?usp=drive_link", //lit
                    12: "https://drive.google.com/drive/folders/1I2cjpqc234WGg_2r-QvBLuuNRHxlyQye?usp=drive_link", //psi
                    13: "https://drive.google.com/drive/folders/1I1GEGoKWf8kGe-yfu2vCW-D_MjrjeJtR?usp=drive_link", //qui
                    14: "https://drive.google.com/drive/folders/1wSs0NjXxMvUy2AUuCSkr26xzGJi8fgwk?usp=drive_link", //rm
                    15: "https://drive.google.com/drive/folders/1AvpcxF4zlh6D7fXrmzx4UzlcgATHtM5A?usp=drive_link", //rv
                    16: "https://drive.google.com/drive/folders/1vd6IwCCP26M7WVzUQEfKnqpRDkSv9uo1?usp=drive_link", //trig
                    17: "https://drive.google.com/drive/folders/1wKElik5oJUb0tYVH_c1nphCoPM3FQyLs?usp=drive_link"  //eco
                },
            2027: { 1: "https://drive.google.com/drive/folders/1p1hXTASyfazpHnQZf2qx32MAmbUSRg_n?usp=drive_link",  //Aritmética
                    2: "https://drive.google.com/drive/folders/1R66Aw1Np5EUnN_Fcf7EmdXmLYUu5bjdD?usp=drive_link", //alg
                    3: "https://drive.google.com/drive/folders/1XHzFucyPCKJqqmgrqI9ATDg8sy5uF3o9?usp=drive_link",  //bio
                    4: "https://drive.google.com/drive/folders/1Q4I0zNpthi_KqMZPPKXsnK6fda0Hnc_5?usp=drive_link",  //fis 
                    5: "https://drive.google.com/drive/folders/1qud-K9OxmAqrz5DzieHMSqgJ2emDy3iy?usp=drive_link",  //geo
                    6: "https://drive.google.com/drive/folders/17roHfIubHNT177IguU_BFTuKxibrDgC8?usp=drive_link",  //gmt
                    7: "https://drive.google.com/drive/folders/1dGoFPivxG7IbfWgSzMlZ0JOVK--Y11aH?usp=drive_link",  //hp
                    8: "https://drive.google.com/drive/folders/1--8nFlX-6sWZhA5mRdWtRj4qSvC8b9Pk?usp=drive_link",  //hu
                    9: "#",    //ing
                    10: "https://drive.google.com/drive/folders/1MtcVMnWhSxh8bM11zS1-k-VAzlvJ8HqM?usp=drive_link",  //len
                    11: "https://drive.google.com/drive/folders/18JG34ovzsENYOESLe2Y44OOoRFMmCnR9?usp=drive_link", //lit
                    12: "https://drive.google.com/drive/folders/1hQxAZp6J6UFD0pAUqSgtlluviTdSKPS3?usp=drive_link", //psi
                    13: "https://drive.google.com/drive/folders/1DEKoZwGC1OSGHXhghYJRBNGw8vjRT4T-?usp=drive_link", //qui
                    14: "https://drive.google.com/drive/folders/1yrKlJQ63FzAUzidn8VKcckvB92atNuqg?usp=drive_link", //rm
                    15: "https://drive.google.com/drive/folders/1VxKEsU7Iu_jVJU5cm4W0XkdX8YD1FeCr?usp=drive_link", //rv
                    16: "https://drive.google.com/drive/folders/1xciGNx6AiVI24GYPYqgY0sNR-5ZdKCGN?usp=drive_link", //trig
                    17: "https://drive.google.com/drive/folders/1vo6sKa7PwxOpOnI3jJgeOr_TrpKXVduY?usp=drive_link"  //eco
                }
        },
        "tomo-ii": {
            2026: { 1: "https://drive.google.com/drive/folders/1kePv9_0fO3YaNqpzyg0kmyDInIOVtFsu?usp=drive_link",  //Aritmética
                    2: "https://drive.google.com/drive/folders/1q5AfQiDCi27hfHdiYz9Fq62Q9pDy2VKW?usp=drive_link", //alg
                    3: "https://drive.google.com/drive/folders/1LBBG-QDgYEtJJpW6xnaBYDIGp7q8DTFB?usp=drive_link",  //bio
                    4: "https://drive.google.com/drive/folders/1-ZCyj5QgDIp29kVyfpno73jiwMUzuETN?usp=drive_link",  //fis 
                    5: "https://drive.google.com/drive/folders/1ItDpKaOoQb8Tup2LQ5aat36cmEmrDwbI?usp=drive_link",  //geo
                    6: "https://drive.google.com/drive/folders/1UswlCCCwmNriBtene8VnvN6BNOGkk6q4?usp=drive_link",  //gmt
                    7: "https://drive.google.com/drive/folders/1ueZggFGmqMYegwyj97ZbIJFgrBK-yBoJ?usp=drive_link",  //hp
                    8: "https://drive.google.com/drive/folders/1OwPT22gXvFnFoQy_VWf9fWJqWOzgK8_f?usp=drive_link",  //hu
                    9: "",    //ing
                    10: "https://drive.google.com/drive/folders/1SXhr1oL9KRIoQEqMcVI_Tkzt2_K8LbQj?usp=drive_link",  //len
                    11: "https://drive.google.com/drive/folders/1YegZMyT35hBtu-wooJ4JscgQtCortZLG?usp=drive_link", //lit
                    12: "https://drive.google.com/drive/folders/1sCSqkwUvxRWUAfoodcMn7tPL9-_vM36h?usp=drive_link", //psi
                    13: "https://drive.google.com/drive/folders/1DCoCZeiqoF4S6BlyuHgE_ZIo-VqSM4kL?usp=drive_link", //qui
                    14: "https://drive.google.com/drive/folders/1dcGPTJkt0CVChAtsj3Cj4eSeAHVhXwWK?usp=drive_link", //rm
                    15: "https://drive.google.com/drive/folders/1ZqDWnyjcxiR_8DIzhDMmcRuFL-Q7omA8?usp=drive_link", //rv
                    16: "https://drive.google.com/drive/folders/1ASmrlv2wIpH2quVlaPPXVEDexISordbL?usp=drive_link", //trig
                    17: "https://drive.google.com/drive/folders/1-i-ExNtasF7LimlR5eHkI3umg_7KlXXF?usp=drive_link"  //eco
                },
            2027: { 1: "https://drive.google.com/drive/folders/1wZ-0TGT4dvQHAd5o4Qz5BDGTve55C_JQ?usp=drive_link",  //Aritmética
                    2: "https://drive.google.com/drive/folders/1VVOwhIx4RTrA97hFhzzQPKJNRCiFKNtf?usp=drive_link", //alg
                    3: "https://drive.google.com/drive/folders/1s_xkrQDVddiLecrvE4pKwOTl75AZ-a-o?usp=drive_link",  //bio
                    4: "https://drive.google.com/drive/folders/1N-vfy6q14OTmG7aOwdQGrcaqW3C7bbQJ?usp=drive_link",  //fis 
                    5: "https://drive.google.com/drive/folders/1hs-ESaoPi5SkuoNshK9_iORvmI5U9Vrz?usp=drive_link",  //geo
                    6: "https://drive.google.com/drive/folders/14zV8EH9JmmIgu0K3kYYFl3kZfAmDPCVd?usp=drive_link",  //gmt
                    7: "https://drive.google.com/drive/folders/16ITh-KN79BEoDpmXOZXj9NfnlwyyKyr0?usp=drive_link",  //hp
                    8: "https://drive.google.com/drive/folders/1dozn7Pokicz-qhtlM2Yt9an0LGWQotzZ?usp=drive_link",  //hu
                    9: "#",    //ing
                    10: "https://drive.google.com/drive/folders/1dZSbWwS4iFTcfQbzI69xEo3qDYTr3ZMS?usp=drive_link",  //len
                    11: "https://drive.google.com/drive/folders/1Yv8XJGP-u1fuPdv9EeprXjZya_p4AIHj?usp=drive_link", //lit
                    12: "https://drive.google.com/drive/folders/1BXJlf_8ubP19PzDOHjmaLGiCdTI5JsHM?usp=drive_link", //psi
                    13: "https://drive.google.com/drive/folders/1W5A2PJaYEngFKqc_eNLPbrxOqOvwJETI?usp=drive_link", //qui
                    14: "https://drive.google.com/drive/folders/1Wy_XpMNHidaBB6-vJ9jU0lokNJ1EXOTR?usp=drive_link", //rm
                    15: "https://drive.google.com/drive/folders/16fiAh0al6Cvjr7AkccHqxDvUdRasSfmn?usp=drive_link", //rv
                    16: "https://drive.google.com/drive/folders/1dxUy5a_utC6Se49m0SgYzcze7SrAelXB?usp=drive_link", //trig
                    17: "https://drive.google.com/drive/folders/14n9EUv0S1Vv9JHrRKwUhatMRT-kdHL1_?usp=drive_link"  //eco
                }
        }
    }
};

// Estado global
let currentYear = 2026;
let currentSelector = "tomo-i";
let currentSelectorType = "tomo";

// Generar botones de Tomos e Intensivos
function generateSelectorButtons() {
    const tomoContainer = document.getElementById('tomo-buttons');
    const intensivoContainer = document.getElementById('intensivo-buttons');
    tomoContainer.innerHTML = '';
    intensivoContainer.innerHTML = '';

    // Generar botones de Tomos
    coursesData.selectors.tomos.forEach(tomo => {
        const btn = document.createElement('button');
        btn.className = `selector-btn tomo-btn ${tomo.id === currentSelector ? 'active' : ''}`;
        btn.dataset.id = tomo.id;
        btn.dataset.type = "tomo";
        btn.innerHTML = `<i class="${tomo.icon}"></i> ${tomo.name}`;
        tomoContainer.appendChild(btn);
    });

    // Generar botones de Intensivos (si existen)
    if (coursesData.selectors.intensivos && coursesData.selectors.intensivos.length) {
        coursesData.selectors.intensivos.forEach(intensivo => {
            const btn = document.createElement('button');
            btn.className = `selector-btn intensivo-btn ${intensivo.id === currentSelector ? 'active' : ''}`;
            btn.dataset.id = intensivo.id;
            btn.dataset.type = "intensivo";
            btn.innerHTML = `<i class="${intensivo.icon}"></i> ${intensivo.name}`;
            intensivoContainer.appendChild(btn);
        });
    } else {
        // Opcional: ocultar el contenedor o mostrar un mensaje
        intensivoContainer.style.display = 'none';
        document.querySelector('.separator').style.display = 'none';
    }
}

// Actualizar el texto del selector actual
function updateCurrentSelectorDisplay() {
    const selectorElement = document.getElementById('current-selector');
    let selectorName = "";
    if (currentSelectorType === "tomo") {
        const tomo = coursesData.selectors.tomos.find(t => t.id === currentSelector);
        selectorName = tomo ? tomo.name : "TOMO I";
    } else {
        const intensivo = coursesData.selectors.intensivos?.find(i => i.id === currentSelector);
        selectorName = intensivo ? intensivo.name : "Intensivo";
    }
    selectorElement.innerHTML = `<i class="${currentSelectorType === 'tomo' ? 'fas fa-book' : 'fas fa-bolt'}"></i> <span>${selectorName} - Verano ${currentYear}</span>`;
}

// Generar tarjetas de cursos
function generateCourseCards() {
    const container = document.getElementById('courses-container');
    container.innerHTML = '';
    document.getElementById('courses-count').textContent = coursesData.courses.length;

    const linksForSelector = coursesData.driveLinks[currentSelector];
    const linksForYear = linksForSelector ? linksForSelector[currentYear] : {};

    coursesData.courses.forEach(course => {
        const driveLink = linksForYear[course.id] || "#";
        const tagClass = currentSelectorType === "intensivo" ? "selector-tag intensivo-tag" : "selector-tag";
        const card = document.createElement('div');
        card.className = 'course-card';
        card.innerHTML = `
            <div class="${tagClass}">${currentSelector}</div>
            <div class="year-tag">Verano ${currentYear}</div>
            <div class="course-logo">
                <i class="${course.icon}" style="color: ${course.color};"></i>
            </div>
            <div class="course-content">
                <h3>${course.name}</h3>
                <p>${course.description}</p>
                <a href="${driveLink}" target="_blank" class="drive-link"><i class="fab fa-google-drive"></i> Acceder</a>
            </div>
        `;
        container.appendChild(card);
    });
    document.getElementById('current-year').textContent = currentYear;
    updateCurrentSelectorDisplay();
}

// Cambiar año (ciclo de verano)
function changeYear(year) {
    currentYear = year;
    document.querySelectorAll('.tab').forEach(tab => {
        if (parseInt(tab.dataset.year) === year) tab.classList.add('active');
        else tab.classList.remove('active');
    });
    generateCourseCards();
}

// Cambiar Tomo/Intensivo
function changeSelector(selectorId, selectorType) {
    currentSelector = selectorId;
    currentSelectorType = selectorType;
    document.querySelectorAll('.selector-btn').forEach(btn => {
        if (btn.dataset.id === selectorId) btn.classList.add('active');
        else btn.classList.remove('active');
    });
    generateCourseCards();
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    generateSelectorButtons();
    generateCourseCards();

    document.querySelectorAll('.selector-btn').forEach(btn => {
        btn.addEventListener('click', () => changeSelector(btn.dataset.id, btn.dataset.type));
    });
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', () => changeYear(parseInt(tab.dataset.year)));
    });
});