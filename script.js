let searches = [
    {
        "query": "rea",
        "suggestions": [
            "react",
            "react hooks",
            "react search box",
            "real-time suggestions",
            "real estate"
        ]
    },
    {
        "query": "jav",
        "suggestions": [
            "javascript",
            "java tutorial",
            "java download",
            "java compiler",
            "java vs javascript"
        ]
    },
    {
        "query": "py",
        "suggestions": [
            "python",
            "python list comprehension",
            "pytorch",
            "python decorators",
            "pyqt"
        ]
    },
    {
        "query": "ne",
        "suggestions": [
            "next.js",
            "netlify",
            "networking basics",
            "neural networks",
            "news"
        ]
    },
    {
        "query": "ma",
        "suggestions": [
            "machine learning",
            "macbook",
            "maps api",
            "markdown",
            "material ui"
        ]
    }
]
let filtered = null;
let inp = document.querySelector("input")
let span = document.querySelector("span")
let suggestionOn = false;
let suggestionIndex = null;

inp.addEventListener("input", () => {
    filtered = searches.filter((e) => {
        return inp.value === e.query;
    });
    if (filtered.length > 0) {
        span.innerHTML = "";
        filtered[0].suggestions.forEach((e) => {
            let p = document.createElement("p");
            p.textContent = e;
            span.appendChild(p);
        });
        suggestionOn = true;
    } else {
        suggestionOn = false;
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") {
        if (suggestionOn) {
            let ps = document.querySelectorAll("span p");
            ps.forEach((e) => e.classList.remove("highlight"));
            if (suggestionIndex === null) {
                ps[0].classList.add("highlight");
                suggestionIndex = 0;
                inp.value = ps[0].textContent;
            } else {
                suggestionIndex = (suggestionIndex + 1) % ps.length;
                ps[suggestionIndex].classList.add("highlight");
                inp.value = ps[suggestionIndex].textContent;
            }
        }
    }
    else if (e.key === "ArrowUp") {
        if (suggestionOn) {
            let ps = document.querySelectorAll("span p");
            ps.forEach((e) => e.classList.remove("highlight"));
            if (suggestionIndex === null) {
                ps[0].classList.add("highlight");
                suggestionIndex = 0;
                inp.value = ps[0].textContent;
            } else {
                if (suggestionIndex === 0) {
                    suggestionIndex = ps.length - 1;
                } else {
                    suggestionIndex = suggestionIndex - 1;
                }
                ps[suggestionIndex].classList.add("highlight");
                inp.value = ps[suggestionIndex].textContent;
            }
        }
    }
})