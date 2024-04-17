import React, {useState} from 'react';
import {DateRangePicker} from 'react-date-range';
import {addDays} from 'date-fns';
import 'react-date-range/dist/styles.css'; // 主要样式文件
import 'react-date-range/dist/theme/default.css'; // 主题样式文件

function DateRangeSelect() {
    const [selectionRange, setSelectionRange] = useState({
        startDate: new Date(),
        endDate: addDays(new Date(), 7),
        key: 'selection',
    });

    const handleSelect = (ranges) => {
        setSelectionRange(ranges.selection);
    };

    const predefinedRanges = [
        {
            label: '3 Days',
            startDate: new Date(),
            endDate: addDays(new Date(), 2),
        },
        {
            label: '7 Days',
            startDate: new Date(),
            endDate: addDays(new Date(), 6),
        },
        {
            label: '15 Days',
            startDate: new Date(),
            endDate: addDays(new Date(), 14),
        }
    ];

    return (
        <DateRangePicker
            ranges={[selectionRange]}
            onChange={handleSelect}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            ranges={predefinedRanges}
            rangeColors={['#3d91ff']}
            direction="horizontal"
        />
    );
}

export default DateRangeSelect;
