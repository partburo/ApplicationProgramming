# Задачи по react

В проекте собраны задачи по react из учебника [LEARN REACT](https://react.dev/learn).
В отличие от оригинала задачи решаются в локальном проекте и на языке TypeScript.

### Инструкция

#### Как запускать задачи 

- Клонируйте проект.
- Установите пакеты ```pnpm install``` или ```npm install```.
- Для запуска конкретного задания в файле main.tsx нужно изменить пути к файлам ``App.tsx`` и ``style.css``, например, для задания ``3_1_1`` пути будет такими: ``import App from './3/3_1_1/App.tsx'`` и ``import './3/3_1_1/style.css'``
- для заданий 2 блока закомментируйте строку с импортом файла `style.css`
- Запустите проект с помощью ```pnpm dev``` или ```npm run dev``` и откройте появившуюся ссылку в браузере.
- Задание задачи написано в файле ```App.tsx```. 
- Для заданий `3_1_2 И 3_1_3` запускать проект нужно иначе, потому что для них используется другой `index.html` файл. В терминале напишите команду: `npm run dev`. В адресной строке браузера укажите путь к html файлам: 
`http://localhost:5173/index/3_1_2/index.html` для 3_1_2
`http://localhost:5173/index/3_1_3/index.html` для 3_1_3

#### Проверка решения задач (очный вариант)

С помощью скрипта tasks случайным образом выбираются 3 задачи из сдаваемого блока и записываются в файл task.md. Требуется решить данные задачи за отведенное время под контролем преподавателя и пояснить решения.

#### Проверка решения задач (заочный вариант)

В этом варианте нужно создать форк репозитория под аккаунтом github, в котором прописаны имя и фамилия студента. Решение каждой задачи оформляется в виде отдельного коммита, в сообщении которого указан номер задачи. При возникновении сомнений в самостоятельности выполнения задачи обучающимся проверка решения задач будет проводиться в очном варианте (возможно по видеосвязи).

### Список задач

#### Создание пользовательского интерфейса с react

- 1_1_1 Export the component
- 1_1_2 Fix the return statement
- 1_1_3 Spot the mistake
- 1_1_4 Your own component
- 1_2_1 Split the components further
- 1_3_1 Convert some HTML to JSX
- 1_4_1 Fix the mistake
- 1_4_2 Extract information into an object
- 1_4_3 Write an expression inside JSX curly braces
- 1_5_1 Extract a component
- 1_5_2 Adjust the image size based on a prop
- 1_5_3 Passing JSX in a children prop
- 1_6_1 Show an icon for incomplete items with ? :
- 1_6_2 Show the item importance with &&
- 1_6_3 Refactor a series of ? : to if and variables
- 1_7_1 Splitting a list in two
- 1_7_2 Nested lists in one component
- 1_7_3 Extracting a list item component
- 1_7_4 List with a separator
- 1_8_1 Fix a broken clock
- 1_8_2 Fix a broken profile
- 1_8_3 Fix a broken story tray     

#### Добавление интерактивности в приложение

- 2_1_1 Fix an event handler
- 2_1_2 Wire up the events
- 2_2_1 Complete the gallery
- 2_2_2 Fix stuck form inputs
- 2_2_3 Fix a crash
- 2_2_4 Remove unnecessary state
- 2_4_1 Implement a traffic light
- 2_5_2 Implement the state queue yourself
- 2_5_1 Fix a request counter
- 2_6_1 Fix incorrect state updates
- 2_6_2 Find and fix the mutation
- 2_6_3 Update an object with Immer
- 2_7_1 Update an item in the shopping cart
- 2_7_2 Remove an item from the shopping cart
- 2_7_3 Fix the mutations using non-mutative methods
- 2_7_4 Fix the mutations using Immer

#### Управление состоянием

- 3_6_1 Replace prop drilling with context
- 3_5_4 Implement useReducer from scratch
- 3_5_3 Restore input values when switching
- 3_5_2 Clear the input on sending a message
- 3_5_1 Dispatch actions from event handlers
- 3_4_5 Fix misplaced state in the list
- 3_4_4 Clear an image while it’s loading
- 3_4_3 Reset a detail form
- 3_4_2 Swap two form fields
- 3_4_1 Fix disappearing input text
- 3_3_2 Filtering a list
- 3_3_1 Synced inputs
- 3_2_4 Implement multiple selection
- 3_2_3 Fix the disappearing selection
- 3_2_2 Fix a broken packing list
- 3_2_1 Fix a component that’s not updating
- 3_1_3 Refactor the imperative solution without React
- 3_1_2 Profile editor
- 3_1_1 Add and remove a CSS class

#### Механизмы внешнего доступа

- 4_1_1 Fix a broken chat input
- 4_1_2 Fix a component failing to re-render
- 4_1_3 Fix debouncing
- 4_1_4 Read the latest state
- 4_2_1 Play and pause the video
- 4_2_2 Focus the search field
- 4_2_3 Scrolling an image carouse
- 4_3_1 Focus a field on mount
- 4_3_2 Focus a field conditionally
- 4_3_3 Fix an interval that fires twice
- 4_3_4 Fix fetching inside an Effect
- 4_4_1 Transform data without Effects
- 4_4_2 Cache a calculation without Effects
- 4_4_3 Reset state without Effects
- 4_4_4 Submit a form without Effects
- 4_5_1 Fix reconnecting on every keystroke
- 4_5_2 Switch synchronization on and off
- 4_5_3 Investigate a stale value bug
- 4_5_4 Fix a connection switch
- 4_5_5 Populate a chain of select boxes
- 4_6_1 Fix a variable that doesn’t update
- 4_7_1 Fix a resetting interval
- 4_7_3 Fix a reconnecting chat
- 4_8_1 Extract a useCounter Hook
- 4_8_2 Make the counter delay configurable
- 4_8_3 Extract useInterval out of useCounter
- 4_8_5 Implement a staggering movement
