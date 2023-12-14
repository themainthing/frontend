import React, { useState, useEffect } from 'react';

const TasksPage = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchData(); // Функция для запроса данных с сервера
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('YOUR_TASKS_API_ENDPOINT');
            const data = await response.json();
            setTasks(data); // Устанавливаем полученные данные в состояние компонента
            console.log(data); // Вывод данных в консоль
        } catch (error) {
            console.error('Ошибка загрузки задач:', error);
        }
    };

    return (
        <div>
            <h1>Список задач</h1>
            <ul>
                {Array.isArray(tasks) && tasks.length > 0 ? (
                    tasks.map(task => (
                        <li key={task.id}>
                            {task.title} - {task.description}
                            {/* Другая информация о задаче */}
                        </li>
                    ))
                ) : (
                    <li>Данные о задачах отсутствуют или не удалось загрузить</li>
                )}
            </ul>
        </div>
    );
};

export default TasksPage;
