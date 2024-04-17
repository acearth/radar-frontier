import React, {useState} from 'react';

const DatePicker = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date(new Date().getTime() + 10 * 24 * 60 * 60 * 1000)); // 默认结束日期是开始日期的10天后
    const maxDays = 188;

    const handleStartDateChange = (date) => {
        const newStartDate = new Date(date);
        setStartDate(newStartDate);
        setEndDate(new Date(newStartDate.getTime() + 10 * 24 * 60 * 60 * 1000)); // 默认选择10天后的日期
    };

    const handleEndDateChange = (date) => {
        const newEndDate = new Date(date);
        const diffInDays = (newEndDate - startDate) / (1000 * 60 * 60 * 24);
        if (diffInDays <= maxDays && diffInDays >= 0) {
            setEndDate(newEndDate);
        } else {
            alert('结束日期必须在开始日期之后且不能超过188天！');
        }
    };

    const handleQuickSelect = (daysToAdd) => {
        const newEndDate = new Date(startDate.getTime() + daysToAdd * 24 * 60 * 60 * 1000);
        setEndDate(newEndDate);
    };

    const handleSubmit = () => {
        console.log('开始时间:', startDate.toISOString().split('T')[0]);
        console.log('结束时间:', endDate.toISOString().split('T')[0]);
    };

    return (
        <div>
            <label>
                开始日期:
                <input
                    type="date"
                    value={startDate.toISOString().split('T')[0]}
                    onChange={(e) => handleStartDateChange(e.target.value)}
                />
            </label>
            <label>
                结束日期:
                <input
                    type="date"
                    value={endDate.toISOString().split('T')[0]}
                    onChange={(e) => handleEndDateChange(e.target.value)}
                    min={startDate.toISOString().split('T')[0]}
                    max={new Date(startDate.getTime() + maxDays * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}
                />
            </label>
            <div>
                <button onClick={() => handleQuickSelect(3)}>快捷选择3天</button>
                <button onClick={() => handleQuickSelect(10)}>快捷选择10天</button>
                <button onClick={() => handleQuickSelect(21)}>快捷选择21天</button>
            </div>
            <button onClick={handleSubmit}>提交</button>
        </div>
    );
};

export default DatePicker;