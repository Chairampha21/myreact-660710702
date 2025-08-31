import React from 'react';

const TodoList = () => {
    // ข้อมูลที่จะแสดง
    const todos = {
        'วันจันทร์': [
            { id: 1, text: 'เรียน React พื้นฐาน', completed: true },
            { id: 2, text: 'อ่านหนังสือ 1 ชั่วโมง', completed: true },
            { id: 3, text: 'ดูการ์ตูน ฟังเพลง', completed: true }
        ],
        'วันอังคาร': [
            { id: 4, text: 'ทำความเข้าใจ Components', completed: true },
            { id: 5, text: 'จัดกระเป๋าเก็บคอม', completed: false },
            { id: 6, text: 'เตรียมงานพรีเซนต์', completed: false }
        ],
        'วันพุธ': [
            { id: 7, text: 'อ่านหังสือวิชา AI', completed: false },
            { id: 8, text: 'ออกกำลังกาย', completed: false }
        ],
        'วันพฤหัสบดี': [
            { id: 9, text: 'ทบทวนบทเรียนทั้งหมด', completed: false },
            { id: 10, text: 'ออกกำลังกาย', completed: false },
        ],
        'วันศุกร์': [
            { id: 11, text: 'ไป Big C', completed: false },
            { id: 12, text: 'ออกกำลังกาย', completed: true },
        ],
        'วันเสาร์': [
            { id: 13, text: 'ทำการบ้าน', completed: false },
            { id: 14, text: 'อ่านหนังสือเตรียมสอบ', completed: false },
            { id: 15, text: 'ออกกำลังกาย', completed: true }
        ],
        'วันอาทิตย์': [
            { id: 16, text: 'วางแผนการเรียนสัปดาห์หน้า', completed: false },
            { id: 17, text: 'ออกกำลังกาย', completed: false }
        ]
    };

    const allTodos = Object.values(todos).flat();
    // คำนวณสถิติ
    const completedCount = allTodos.filter(todo => todo.completed).length;
    const totalCount = allTodos.length;
    const percentage = Math.round((completedCount / totalCount) * 100);
    
    return (
        <div style={{ maxWidth: '500px', margin: '20px auto', padding: '20px' }}>
            <h3>📝 รายการที่ต้องทำ จันทร์ - อาทิตย์</h3>
            
            {/* Progress Bar */}
            <div style={{
                backgroundColor: '#f0f0f0',
                borderRadius: '20px',
                padding: '3px',
                margin: '15px 0'
            }}>
                <div style={{
                    backgroundColor: '#4caf50',
                    width: `${percentage}%`,
                    textAlign: 'center',
                    borderRadius: '17px',
                    padding: '8px 0',
                    color: 'white',
                    fontWeight: 'bold',
                    transition: 'width 0.3s ease'
                }}>
                    {percentage}%
                </div>
            </div>
            
{/* Todo Items แสดงแยกตามวัน */}
            <div style={{ margin: '20px 0' }}>
                {Object.entries(todos).map(([day, dayTodos]) => (
                    <div key={day} style={{ marginBottom: '24px' }}>
                        <h4 style={{ marginBottom: '10px', color: '#333' }}>{day}</h4>

                        {dayTodos.map(todo => (
                            <div
                                key={todo.id}
                                style={{
                                    padding: '12px',
                                    margin: '8px 0',
                                    borderRadius: '8px',
                                    border: '1px solid #ddd',
                                    display: 'flex',
                                    alignItems: 'center',
                                    backgroundColor: todo.completed ? '#e8f5e8' : '#fff',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <span style={{ marginRight: '12px', fontSize: '18px' }}>
                                    {todo.completed ? '✅' : '⬜'}
                                </span>
                                <span style={{
                                    flex: 1,
                                    textDecoration: todo.completed ? 'line-through' : 'none',
                                    color: todo.completed ? '#666' : '#333'
                                }}>
                                    {todo.text}
                                </span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            
            {/* Summary */}
            <div style={{
                marginTop: '20px',
                textAlign: 'center',
                padding: '15px',
                background: 'linear-gradient(45deg, #667eea, #764ba2)',
                color: 'white',
                borderRadius: '8px',
                fontWeight: 'bold'
            }}>
                ✨ ทำเสร็จแล้ว {completedCount} จาก {totalCount} รายการ
            </div>
        </div>
    );
};

export default TodoList;