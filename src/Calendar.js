function updateCalendar() {
    // 更新日历界面
    const targetDateInput = document.getElementById('target-date');
    let targetDate = new Date(targetDateInput.value);
    const eventNameInput = document.getElementById('event-name');
    const eventName = eventNameInput.value.trim(); // 获取事件名称并去除两端空格
    const backgroundColorInput = document.getElementById('selected-color'); // 获取背景颜色选择器
    const backgroundColor = backgroundColorInput.value; // 获取选择的背景颜色值
    const hexColorInput = document.getElementById('hexColor'); // 获取颜色值并去除两端空格
    let cycleType = document.getElementById('cycle-type').value; // 获取周期类型

    // 检查输入日期是否有效
    if (isNaN(targetDate.getTime())) {
        //    console.log('请输入有效的日期。');
        return;
    }

    let currentDate = new Date();

    targetDate.setHours(8, 0, 0, 0);
    currentDate.setHours(8, 0, 0, 0); // 设置同一时间便于比较日期
    // 检查是否需要更新日期为最近的下一个周期
    if (cycleType !== 'none' && currentDate > targetDate) {
        while (currentDate > targetDate) {
            let year = targetDate.getFullYear();
            let month = targetDate.getMonth();
            let day = targetDate.getDate();
            switch (cycleType) {
                case 'year':
                    // 处理闰年2月29的情况
                    if (month === 1 && day === 29) {
                        targetDate.setFullYear(targetDate.getFullYear() + 4);
                    } else {
                        targetDate.setFullYear(targetDate.getFullYear() + 1);
                    }
                    break;
                case 'month':
                    // 特殊处理月末情况
                    if (isEndOfMonth(targetDate)) {
                        targetDate.setMonth(month + 2);
                        targetDate.setDate(0); // 将日期设置为下一个月的最后一天
                    } else {
                        // 其他日期正常增加一个月
                        targetDate.setMonth(month + 1);
                        // 如果日期发生变化，设置为上个月的最后一天
                        if (day > targetDate.getDate()) {
                            targetDate.setDate(0);
                        }
                    }
                    break;
                case 'week':
                    targetDate.setDate(targetDate.getDate() + 7);
                    break;
                default:
                    break;
            }
        }
        // 如果周期不是'none'，更新目标日期
        document.getElementById('target-date').valueAsDate = targetDate;
    }

    // 显示事件日期
    updateDate(targetDate);
    // 显示事件
    document.getElementById('calendar-event').textContent = eventName;
    // 计算倒数
    const daysDiff = calculateCount(targetDate);
    updateCountInfo(daysDiff, eventName);
    // 设置背景色
    document.getElementById('calendar-top').style = `background-color: ${backgroundColor};`;
    hexColorInput.value = backgroundColor;

}
// 检测日期是否是月末
function isEndOfMonth(date) {
    let testDate = new Date(date);
    testDate.setDate(testDate.getDate() + 1);
    return testDate.getDate() === 1;
}

// 判断一个年份是否为闰年
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
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
    if (daysDiff > 0) {
        countInfo.textContent = `还有 ${daysDiff} 天`;
    } else if (daysDiff === 0) {
        countInfo.textContent = `今天`;
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
