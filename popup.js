document.addEventListener("DOMContentLoaded", function() {
  const tabs = document.querySelectorAll('.tab');
  const contents = document.querySelectorAll('.content');

  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      // Скрыть все вкладки и контенты
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));

      // Показать текущую вкладку и контент
      tab.classList.add('active');
      const tabId = tab.id.replace('tab', 'content');
      document.getElementById(tabId).classList.add('active');
    });
  });
});
