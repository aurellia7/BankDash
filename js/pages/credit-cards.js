(function () {
  'use strict';

  function drawDonutChart() {
    const canvas = document.getElementById('expense-chart');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    const data = [
      { label: 'DBL Bank', value: 35, color: '#2D60FF' },
      { label: 'BRC Bank', value: 20, color: '#FF82AC' },
      { label: 'ABM Bank', value: 25, color: '#16DBCC' },
      { label: 'MCP Bank', value: 20, color: '#FFBB38' },
    ];

    const total = data.reduce((sum, d) => sum + d.value, 0);

    const size = Math.min(canvas.parentElement.offsetWidth, 200);
    canvas.width  = size;
    canvas.height = size;

    const cx = size / 2;
    const cy = size / 2;
    const outerRadius = size / 2 - 8;
    const innerRadius = outerRadius * 0.55; 
    const gap = 0.03; 

    let startAngle = -Math.PI / 2; 

    data.forEach((segment) => {
      const sliceAngle = (segment.value / total) * (Math.PI * 2) - gap;

      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, outerRadius, startAngle, startAngle + sliceAngle);
      ctx.closePath();
      ctx.fillStyle = segment.color;
      ctx.fill();

      startAngle += sliceAngle + gap;
    });

    ctx.beginPath();
    ctx.arc(cx, cy, innerRadius, 0, Math.PI * 2);
    ctx.fillStyle = '#FFFFFF';
    ctx.fill();
  }

  function initCardListHover() {
    const rows = document.querySelectorAll('.card-list-row');
    rows.forEach((row) => {
      row.addEventListener('mouseenter', () => {
        row.style.backgroundColor = 'var(--color-bg)';
        row.style.borderRadius = 'var(--radius-md)';
      });
      row.addEventListener('mouseleave', () => {
        row.style.backgroundColor = '';
        row.style.borderRadius = '';
      });
    });
  }

  function initCardToggles() {
    const toggles = document.querySelectorAll('.credit-card__toggle-track');
    toggles.forEach((track) => {
      track.addEventListener('click', () => {
        const card = track.closest('.credit-card');
        if (!card) return;

        if (card.classList.contains('credit-card--active')) {
          card.classList.replace('credit-card--active', 'credit-card--inactive');
        }
      });
    });
  }

  function initAddCardForm() {
    const form = document.getElementById('add-card-form');
    if (!form) return;

    const addBtn = form.querySelector('.btn--primary');
    if (!addBtn) return;

    addBtn.addEventListener('click', () => {
      const cardNumber = form.querySelector('#card-number');
      const nameOnCard = form.querySelector('#name-on-card');

      let valid = true;

      [cardNumber, nameOnCard].forEach((input) => {
        if (!input) return;
        if (!input.value.trim()) {
          input.style.borderColor = '#FF4B4B';
          valid = false;
        } else {
          input.style.borderColor = '';
        }
      });

      if (valid) {
        addBtn.textContent = 'Card Added!';
        addBtn.style.backgroundColor = '#16DBCC';
        setTimeout(() => {
          addBtn.textContent = 'Add Card';
          addBtn.style.backgroundColor = '';
          form.reset && form.reset();
        }, 2000);
      }
    });

    const cardNumInput = form.querySelector('#card-number');
    if (cardNumInput) {
      cardNumInput.addEventListener('input', (e) => {
        let val = e.target.value.replace(/\D/g, '').substring(0, 16);
        val = val.match(/.{1,4}/g)?.join(' ') || val;
        e.target.value = val;
      });
    }
  }

  function init() {
    drawDonutChart();
    initCardListHover();
    initCardToggles();
    initAddCardForm();

    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(drawDonutChart, 150);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();