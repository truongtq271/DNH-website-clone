// Mobile navigation toggle
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

navToggle?.addEventListener('click', () => {
  mainNav.classList.toggle('is-open');
});

document.querySelectorAll('#mainNav a').forEach((link) => {
  link.addEventListener('click', () => mainNav.classList.remove('is-open'));
});

// Placeholder doctor cards (replace with real staff data)
const doctors = [
  { initials: 'BS', role: 'Trưởng khoa Nội tổng hợp' },
  { initials: 'BS', role: 'Trưởng khoa Ngoại tổng hợp' },
  { initials: 'BS', role: 'Trưởng khoa Phụ sản' },
  { initials: 'BS', role: 'Trưởng khoa Nhi' },
  { initials: 'BS', role: 'Trưởng khoa Chẩn đoán hình ảnh' },
  { initials: 'BS', role: 'Trưởng khoa Tai Mũi Họng' },
];

const doctorGrid = document.getElementById('doctorGrid');
if (doctorGrid) {
  doctorGrid.innerHTML = doctors
    .map(
      (d, i) => `
    <div class="card doctor-card">
      <div class="doctor-avatar">${d.initials}</div>
      <h3>BS. Nguyễn Văn ${String.fromCharCode(65 + i)}</h3>
      <div class="doctor-role">${d.role}</div>
    </div>`
    )
    .join('');
}

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('#mainNav a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach((section) => {
    const top = section.offsetTop - 120;
    if (window.scrollY >= top) current = section.getAttribute('id');
  });
  navLinks.forEach((link) => {
    link.classList.toggle('is-active', link.getAttribute('href') === `#${current}`);
  });
});
