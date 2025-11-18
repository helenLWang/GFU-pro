// 导航栏交互
function initNavbar() {
  const navLinks = document.querySelectorAll('.nav-links a');
  const currentPath = window.location.pathname;
  
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath || 
        (currentPath === '/' && link.getAttribute('href') === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// 平滑滚动
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// 分析页面图表初始化
function initAnalyticsCharts() {
  if (typeof Chart !== 'undefined' && document.getElementById('followersChart')) {
    // 粉丝增长图表
    const followersCtx = document.getElementById('followersChart').getContext('2d');
    new Chart(followersCtx, {
      type: 'line',
      data: {
        labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
        datasets: [{
          label: '小红书粉丝',
          data: [2000, 2200, 2400, 2600, 2800, 2900],
          borderColor: '#ff9fb3',
          backgroundColor: 'rgba(255, 159, 179, 0.1)',
          tension: 0.4,
          fill: true
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
          }
        },
        scales: {
          y: {
            beginAtZero: false,
            grid: {
              color: 'rgba(0, 0, 0, 0.05)'
            }
          },
          x: {
            grid: {
              display: false
            }
          }
        }
      }
    });
    
    // 点赞统计图表
    const likesCtx = document.getElementById('likesChart').getContext('2d');
    new Chart(likesCtx, {
      type: 'bar',
      data: {
        labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
        datasets: [{
          label: '点赞数',
          data: [8000, 9500, 11000, 12500, 14000, 16000],
          backgroundColor: '#ff9fb3',
          borderRadius: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: 'rgba(0, 0, 0, 0.05)'
            }
          },
          x: {
            grid: {
              display: false
            }
          }
        }
      }
    });
    
    // 客户满意度图表
    const satisfactionCtx = document.getElementById('satisfactionChart').getContext('2d');
    new Chart(satisfactionCtx, {
      type: 'doughnut',
      data: {
        labels: ['非常满意', '满意', '一般', '不满意'],
        datasets: [{
          data: [65, 25, 8, 2],
          backgroundColor: [
            '#ff9fb3',
            '#ffd6e0',
            '#f0f0f0',
            '#e0e0e0'
          ],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'right',
          }
        },
        cutout: '65%'
      }
    });
  }
}

// 预约表单处理
function initBookingForm() {
  const bookingForm = document.getElementById('bookingForm');
  if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // 模拟表单提交
      const name = document.getElementById('name').value;
      const phone = document.getElementById('phone').value;
      const date = document.getElementById('date').value;
      const time = document.getElementById('time').value;
      const service = document.getElementById('service').value;
      
      if (name && phone && date && time && service) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message message-success';
        messageDiv.textContent = '预约成功！我们会尽快联系您确认详情。';
        
        bookingForm.prepend(messageDiv);
        bookingForm.reset();
        
        // 3秒后移除成功消息
        setTimeout(() => {
          messageDiv.remove();
        }, 3000);
      }
    });
  }
}

// 初始化日历选择器
function initCalendar() {
  const calendarContainer = document.querySelector('.calendar');
  if (calendarContainer) {
    const today = new Date();
    const monthNames = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
    
    // 更新日历标题
    const calendarHeader = document.querySelector('.calendar-header');
    if (calendarHeader) {
      calendarHeader.textContent = `${today.getFullYear()}年 ${monthNames[today.getMonth()]}`;
    }
    
    // 生成当前月份的日期
    const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1).getDay();
    
    // 清空日历
    calendarContainer.innerHTML = '';
    
    // 添加星期标题
    const weekdays = ['日', '一', '二', '三', '四', '五', '六'];
    weekdays.forEach(day => {
      const dayElement = document.createElement('div');
      dayElement.className = 'calendar-day calendar-weekday';
      dayElement.textContent = day;
      dayElement.style.fontWeight = 'bold';
      dayElement.style.backgroundColor = '#f8f8f8';
      calendarContainer.appendChild(dayElement);
    });
    
    // 添加空单元格（上月剩余天数）
    for (let i = 0; i < firstDayOfMonth; i++) {
      const emptyCell = document.createElement('div');
      emptyCell.className = 'calendar-day calendar-day-disabled';
      calendarContainer.appendChild(emptyCell);
    }
    
    // 添加当前月份的日期
    for (let i = 1; i <= daysInMonth; i++) {
      const dateElement = document.createElement('div');
      dateElement.className = 'calendar-day';
      dateElement.textContent = i;
      
      // 禁用过去的日期
      const currentDate = new Date(today.getFullYear(), today.getMonth(), i);
      if (currentDate < new Date(today.setHours(0, 0, 0, 0))) {
        dateElement.classList.add('calendar-day-disabled');
      } else {
        // 添加点击事件
        dateElement.addEventListener('click', function() {
          // 移除之前的选中状态
          document.querySelectorAll('.calendar-day-selected').forEach(el => {
            el.classList.remove('calendar-day-selected');
          });
          // 添加选中状态
          this.classList.add('calendar-day-selected');
          
          // 更新日期输入框
          const formattedDate = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
          const dateInput = document.getElementById('date');
          if (dateInput) {
            dateInput.value = formattedDate;
          }
        });
      }
      
      calendarContainer.appendChild(dateElement);
    }
  }
}

// 初始化服务选项动态加载
function initServiceOptions() {
  const serviceSelect = document.getElementById('service');
  if (serviceSelect) {
    const services = [
      { name: '基础美甲', price: '¥198', duration: '60分钟' },
      { name: '法式美甲', price: '¥258', duration: '90分钟' },
      { name: '延长美甲', price: '¥328', duration: '120分钟' },
      { name: '创意设计', price: '¥398', duration: '150分钟' },
      { name: '卸甲服务', price: '¥88', duration: '30分钟' }
    ];
    
    services.forEach(service => {
      const option = document.createElement('option');
      option.value = service.name;
      option.textContent = `${service.name} - ${service.price} (${service.duration})`;
      serviceSelect.appendChild(option);
    });
  }
}

// 初始化所有功能
function initApp() {
  // 基础功能
  initNavbar();
  initSmoothScroll();
  
  // 页面特定功能
  if (window.location.pathname.includes('analytics')) {
    initAnalyticsCharts();
  }
  
  if (window.location.pathname.includes('booking')) {
    initBookingForm();
    initCalendar();
    initServiceOptions();
  }
}

// 页面加载完成后初始化
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}