function updateCalendar() {
    // 更新日历界面
    const targetDateInput = document.getElementById('target-date');
    const targetDate = new Date(targetDateInput.value);
    const eventNameInput = document.getElementById('event-name');
    const eventName = eventNameInput.value.trim(); // 获取事件名称并去除两端空格
    const backgroundColorInput = document.getElementById('selected-color'); // 获取背景颜色选择器
    const backgroundColor = backgroundColorInput.value; // 获取选择的背景颜色值
    if (isNaN(targetDate.getTime())) {
        //    console.log('请输入有效的日期。');
        return;
    }

    updateDate(targetDate);
    // 显示事件
    document.getElementById('calendar-event').textContent = eventName;

    const daysDiff = calculateCount(targetDate);
    updateCountInfo(daysDiff, eventName);
    document.getElementById('calendar-top').style = `background-color: ${backgroundColor};`;
}

function getToday() {
    return new Date();
}

function formatDate(date) {
    const day = ('0' + date.getDate()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    return { day, month, year };
}

function updateDate(date) {
    const calendarDate = document.getElementById('calendar-date');
    let date_object = new Date(date);
    const { day, month, year } = formatDate(date_object);
    const weekday = getWeekday(date_object);

    calendarDate.innerHTML = `<span style="padding-left: 0.5vw;">${year}.${month}.${day} ${weekday}</span>`;
}

function calculateCount(targetDate) {
    const today = getToday();
    const timeDiff = targetDate - today;
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return daysDiff;
}

function updateCountInfo(daysDiff, eventName) {
    const countInfo = document.getElementById('count-info');
    if (daysDiff >= 0) {
        countInfo.textContent = `还有 ${daysDiff} 天`;
    } else {
        countInfo.textContent = `已过 ${Math.abs(daysDiff)} 天`;
    }
}

function getWeekday(date) {
    let date_object = new Date(date);
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return weekdays[date.getDay()];
}

function toggleSettingsMenu() {
    const settingsMenu = document.getElementById('calendar-options');
    settingsMenu.style.display = settingsMenu.style.display === 'flex' ? 'none' : 'flex';
}
