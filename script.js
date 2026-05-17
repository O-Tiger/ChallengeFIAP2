function showSection(name, el) {
  event.preventDefault();

  document.querySelectorAll('.section').forEach(function (s) {
    s.classList.remove('active');
  });

  var target = document.getElementById(name + 'Section');
  if (target) target.classList.add('active');

  document.querySelectorAll('.nav-item').forEach(function (link) {
    link.classList.remove('active');
  });

  if (el) el.classList.add('active');
}
