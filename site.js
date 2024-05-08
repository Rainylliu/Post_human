document.addEventListener('DOMContentLoaded', function() {
    const scrollDowns = document.querySelector('.scroll-downs');
    setTimeout(() => {
        scrollDowns.style.display = 'none';
    }, 3000); 
});

window.addEventListener('resize', adjustPosition);

function adjustPosition() {
    const headerHeight = document.querySelector('header').offsetHeight; // 例如顶部有一个头部元素
    const animalContainer = document.querySelector('.animal');
    animalContainer.style.top = `${headerHeight}px`; // 根据头部高度动态设置 top
}

document.addEventListener('scroll', () => {
    const vh = window.innerHeight;
    const scrollY = window.scrollY; 
    const scrollPercent = scrollY / vh;

    const a1 = document.querySelector('.a1');
    if (scrollPercent >= 0.35) {
        const transformAmount = Math.max((scrollPercent - 0.35) * 100, 0);
        a1.style.transform = `translateX(-${transformAmount}vw)`;  // Changed direction
        a1.style.opacity = 1 - transformAmount / 100;
    }

    const a2 = document.querySelector('.a2');
    if (scrollPercent >= 0.80) {
        const transformAmount = Math.max((scrollPercent - 0.80) * 100, 0);
        a2.style.transform = `translateX(${transformAmount}vw)`;  // Changed direction
        a2.style.opacity = 1 - transformAmount / 100;
    }

    const a3 = document.querySelector('.a3');
    if (scrollPercent >= 1.30) {
        const transformAmount = Math.max((scrollPercent - 1.30) * 100, 0);
        a3.style.transform = `translateX(-${transformAmount}vw)`;  // Changed direction
        a3.style.opacity = 1 - transformAmount / 100;
    }

    const a4 = document.querySelector('.a4');
    if (scrollPercent >= 1.80) {
        const transformAmount = Math.max((scrollPercent - 1.80) * 100, 0);
        a4.style.transform = `translateX(${transformAmount}vw)`;  // Changed direction
        a4.style.opacity = 1 - transformAmount / 100;
    }

    const a5 = document.querySelector('.a5');
    if (scrollPercent >= 2.30) {
        const transformAmount = Math.max((scrollPercent - 2.30) * 100, 0);
        a5.style.transform = `translateX(-${transformAmount}vw)`;
        a5.style.opacity = 1 - transformAmount / 100;
    }

    const a6 = document.querySelector('.a6');
    if (scrollPercent >= 2.80) {
        const transformAmount = Math.max((scrollPercent - 2.80) * 100, 0);
        a6.style.transform = `translateX(${transformAmount}vw)`;
        a6.style.opacity = 1 - transformAmount / 100;
    }

    const a7 = document.querySelector('.a7');
    if (scrollPercent >= 3.30) {
        const transformAmount = Math.max((scrollPercent - 3.30) * 100, 0);
        a7.style.transform = `translateX(-${transformAmount}vw)`;
        a7.style.opacity = 1 - transformAmount / 100;
    }

    const a8 = document.querySelector('.a8');
    if (scrollPercent >= 3.80) {
        const transformAmount = Math.max((scrollPercent - 3.80) * 100, 0);
        a8.style.transform = `translateX(${transformAmount}vw)`;
        a8.style.opacity = 1 - transformAmount / 100;
    }
});
document.addEventListener('DOMContentLoaded', function () {
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    function showSlides(n) {
        slides.forEach((slide, index) => {
            slide.style.display = "none";
        });
        slideIndex = (n + slides.length) % slides.length;
        slides[slideIndex].style.display = "block";
    }

    prevButton.addEventListener('click', () => {
        showSlides(slideIndex - 1);
    });

    nextButton.addEventListener('click', () => {
        showSlides(slideIndex + 1);
    });

    showSlides(slideIndex); // Initialize the slider
});





const ctx = document.getElementById('radiationChart').getContext('2d');
const scatterChart = new Chart(ctx, {
    type: 'scatter',
    data: {
        datasets: [{
            label: 'Radiation Exposure Levels',
            data: [
                {x: 1, y: 10000, event: 'Single dose, fatal within weeks'},
                {x: 2, y: 6000, event: 'Typical dosage recorded in those Chernobyl workers who died within a month'},
                {x: 3, y: 5000, event: 'Single dose which would kill half of those exposed to it within a month'},
                {x: 4, y: 1000, event: 'Single dosage which would cause radiation sickness, including nausea, lower white blood cell count. Not fatal.'},
                {x: 5, y: 1000, event: 'Accumulated dosage estimated to cause a fatal cancer many years later in 5% of people'},
                {x: 6, y: 400, event: 'Max radiation levels recorded at Fukushima plant 15 March 2011, per hour'},
                {x: 7, y: 100, event: 'Exposure of Chernobyl residents who were relocated after the blast in 1986'},
                {x: 8, y: 100, event: 'Recommended limit for radiation workers every five years'},
                {x: 9, y: 100, event: 'Lowest annual dose at which any increase in cancer is clearly evident'},
                {x: 10, y: 16, event: 'CT scan: heart'},
                {x: 11, y: 15, event: 'CT scan: abdomen & pelvis'},
                {x: 12, y: 10, event: 'Dose in full-body CT scan'},
                {x: 13, y: 9, event: 'Airline crew flying New York to Tokyo polar route, annual exposure'},
                {x: 14, y: 2, event: 'Natural radiation we’re all exposed to, per year'},
                {x: 15, y: 2, event: 'CT scan: head'},
                {x: 16, y: 1.5, event: 'Spine x-ray'},
                {x: 17, y: 1.02, event: 'Radiation per hour detected at Fukushima site, 12 March 2011'},
                {x: 18, y: 0.4, event: 'Mammogram breast x-ray'},
                {x: 19, y: 0.1, event: 'Chest x-ray'},
            ],
            backgroundColor: function(context) {
                const value = context.raw.y;
                if (value > 5000) return 'rgba(255, 99, 132, 1)'; // Red
                if (value > 1000) return 'rgba(255, 159, 64, 1)'; // Orange
                if (value > 100) return 'rgba(255, 205, 86, 1)'; // Yellow
                if (value > 10) return 'rgba(75, 192, 192, 1)'; // Green
                return 'rgba(54, 162, 235, 1)'; // Blue
            },
            pointRadius: 10 // Increased point radius
        }]
    },
    options: {
        scales: {
            x: {
                display: false
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Radiation Level (mSv)',
                    font: {
                        size: 16 // Larger font size for the title
                    }
                },
                ticks: {
                    font: {
                        size: 14 // Larger font size for the ticks
                    }
                }
            }
        },
        plugins: {
            tooltip: {
                bodyFont: {
                    size: 14 // Larger font size in tooltip
                },
                callbacks: {
                    label: function(context) {
                        return context.raw.event + ': ' + context.raw.y + ' mSv';
                    }
                }
            },
            legend: {
                display: false
            }
        }
    }
});

const locationCtx = document.getElementById('locationRadiationChart').getContext('2d');
const locationRadiationChart = new Chart(locationCtx, {
    type: 'scatter',  // Changed to scatter
    data: {
        datasets: [{
            label: 'Sieverts per hour (SI Unit)',
            data: [
                {x: 1, y: 300, location: 'Reactor core vicinity'},
                {x: 2, y: 175, location: 'Fuel fragments'},
                {x: 3, y: 100, location: 'Debris at circulation pumps'},
                {x: 4, y: 100, location: 'Debris near electrolyzers'},
                {x: 5, y: 50, location: 'Level +25 feedwater room water'},
                {x: 6, y: 77.5, location: 'Turbine hall Level 0'},
                {x: 7, y: 12.5, location: 'Affected unit area'},
                {x: 8, y: 10, location: 'Room 712 water'},
                {x: 9, y: 0.04, location: 'Control room'},
                {x: 10, y: 0.3, location: 'Gidroelektromontazh depot'},
                {x: 11, y: 0.125, location: 'Concrete mixing unit'}
            ],
            backgroundColor: 'rgba(54, 162, 235, 1)',  // Adjusted for clarity
            pointRadius: 6  // Increase point radius for visibility
        }]
    },
    options: {
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return context.raw.location + ': ' + context.raw.y + ' Sieverts per hour';
                    }
                }
            },
            title: {
                display: true,
                text: 'Approximate radiation levels in and around Unit 4 shortly after the explosion',
                // Source B. Medvedev (June 1989).”JPRS Report: Soviet Union Economic Affairs Chernobyl Notebook”.
                font: {
                    size: 18
                },
                padding: {
                    top: 10,
                    bottom: 30
                }
            }
        },
        scales: {
            x: {
                display: false  // Hide the x-axis as it doesn't represent meaningful data in this context
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Radiation Level (Sieverts per hour)'
                }
            }
        }
    }
});

const pripyatCtx = document.getElementById('pripyatRadiationChart').getContext('2d');
const pripyatRadiationChart = new Chart(pripyatCtx, {
    type: 'scatter', // Chart type
    data: {
        datasets: [{
            label: 'uSv/hour',
            data: [
                {x: 1, y: 0.9, location: '“Lazurny” swimming pool'},
                {x: 2, y: 0.8, location: 'Pripyat kindergarten “Golden Key”'},
                {x: 3, y: 0.3, location: 'Zone checkpoint'},
                {x: 4, y: 11.5, location: 'Pripyat 1970 monument'},
                {x: 5, y: 0.6, location: 'Pripyat checkpoint'},
                {x: 6, y: 0.75, location: 'Hospital No 126 (above ground)'},
                {x: 7, y: 382, location: 'Hospital No 126 (basement)'},
                {x: 8, y: 0.8, location: 'Palace of culture'},
                {x: 9, y: 1.3, location: 'Pripyat fairground'},
                {x: 10, y: 0.7, location: 'Middle School Number 3'},
                {x: 11, y: 0.7, location: 'Middle School Number 1'},
                {x: 12, y: 0.3, location: 'Reactor 5/6'},
                {x: 13, y: 7.05, location: 'Cooling towers'},
                {x: 14, y: 0.9, location: '16 storey tower block'},
                {x: 15, y: 0.5, location: 'Duga-3 array'},
                {x: 16, y: 1.2, location: 'Fish laboratory'},
                {x: 17, y: 1.05, location: 'Jupiter factory'},
                {x: 18, y: 0.7, location: 'Police station'},
                {x: 19, y: 1.6, location: 'Vehicle dump'},
                {x: 20, y: 0.3, location: 'Yanov Railway Station'},
                {x: 21, y: 0.7, location: 'Dock cranes'},
                {x: 22, y: 2.5, location: 'Reactor 4'},
                {x: 23, y: 18, location: 'Pripyat cemetery'},
                {x: 24, y: 0.2, location: 'Chernobyl cemetery'},
                {x: 25, y: 0.3, location: 'Abandoned village'},
                {x: 26, y: 0.2, location: 'Residential houses Chernobyl'},
                {x: 27, y: 13.6, location: 'Cafe Pripyat'},
                {x: 28, y: 336, location: 'Metal claw'}
            ],
            backgroundColor: 'rgba(153, 102, 255, 1)',
            pointRadius: 6
        }]
    },
    options: {
        layout: {
            padding: {
                top: 10,
                right: 20,
                bottom: 10,
                left: 20
            }
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return context.raw.location + ': ' + context.raw.y.toFixed(2) + ' uSv/hour';
                    }
                }
            },
            title: {
                display: true,
                text: 'Levels of radiation in Pripyat and Chernobyl now',
                font: {
                    size: 18
                },
                padding: {
                    top: 10,
                    bottom: 30
                }
            }
        },
        scales: {
            x: {
                display: false
            },
            y: {
                beginAtZero: false,
                type: 'logarithmic',
                title: {
                    display: true,
                    text: 'Radiation Level (uSv/hour)'
                },
                ticks: {
                    callback: function(value, index, ticks) {
                        return value.toLocaleString(); // Ensures tick labels are formatted as readable numbers
                    }
                }
            }
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const healthCtx = document.getElementById('healthCostsChart').getContext('2d');
    const plantCtx = document.getElementById('plantCostsChart').getContext('2d');

    const healthData = {
        labels: ['Lych & Pateeva 1996', 'UNDP/UNICEF 2002', 'Bay & Oughton 2005', 'Nat. Report Ukraine 2006', 'Nat. Report Belarus 2011'],
        datasets: [{
            label: 'Health Related Costs (in billion $)',
            data: [1.9, 97, 6.4, 121.8, 93.27],
            backgroundColor: [
                'rgba(255, 99, 132, 0.7)',
                'rgba(255, 159, 64, 0.7)',
                'rgba(255, 205, 86, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(54, 162, 235, 0.7)'
            ]
        }]
    };

    const plantData = {
        labels: ['Lych & Pateeva 1996', 'UNDP/UNICEF 2002', 'Bay & Oughton 2005', 'Nat. Report Ukraine 2006', 'Nat. Report Belarus 2011'],
        datasets: [{
            label: 'Plant Related Costs (in billion $)',
            data: [12.85, 0, 0, 0, 0], // Adjust these data points if more information is available.
            backgroundColor: [
                'rgba(54, 162, 235, 0.7)',
                'rgba(153, 102, 255, 0.7)',
                'rgba(255, 159, 64, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(255, 99, 132, 0.7)'
            ]
        }]
    };

    new Chart(healthCtx, {
        type: 'pie',
        data: healthData,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top'
                }
            }
        }
    });

    new Chart(plantCtx, {
        type: 'pie',
        data: plantData,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top'
                }
            }
        }
    });
});



// gif image
const image = new Image();
image.src = "http://metofficenews.files.wordpress.com/2011/04/chernobylcaesium-600.gif";
image.alt = "Chernobyl Caesium Distribution Map";

// Append the image to the container
document.getElementById('imageContainer').appendChild(image);


// text: 'Levels of radiation in Pripyat and Chernobyl now',
// The levels of radiation as measured in 2009 (Radiation levels can, and do, fluctuate depending on a number of factors.)
  