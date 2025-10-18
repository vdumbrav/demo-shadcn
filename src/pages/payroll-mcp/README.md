# Payroll MCP Module

Модульная структура страницы Payroll MCP с разделением на компоненты по сложности.

## Структура проекта

```
payroll-mcp/
├── components/           # Компоненты страницы
│   ├── index.ts         # Barrel export всех компонентов
│   ├── StatsCards.tsx   # ✅ Простой компонент
│   ├── VisitorsChart.tsx # 🟡 Средней сложности
│   ├── PayrollTable.tsx  # 🔴 Сложный компонент
│   └── StartPayrollDialog.tsx # 🔴 Сложный компонент
└── data/                # Mock данные
    └── mockData.ts      # Все тестовые данные
```

## Компоненты

### 🟢 Простые компоненты

#### `StatsCards.tsx`

- **Назначение**: Отображение 4 карточек со статистикой
- **Сложность**: Низкая
- **Состояние**: Без state, только props
- **Данные**: Использует `statsData` из mockData
- **Функционал**:
  - Grid из 4 карточек
  - Отображение метрик с badges
  - Иконки трендов (up/down)

### 🟡 Средней сложности

#### `VisitorsChart.tsx`

- **Назначение**: График посещаемости
- **Сложность**: Средняя
- **Состояние**: Без state
- **Данные**: Использует `chartData` и `chartConfig`
- **Функционал**:
  - Area chart с градиентом
  - Toggle group для выбора периода
  - Recharts интеграция
  - Tooltips

### 🔴 Сложные компоненты

#### `PayrollTable.tsx`

- **Назначение**: Таблица с данными по payroll секциям
- **Сложность**: Высокая
- **Состояние**:
  - `checkedItems` - массив выбранных строк
- **Данные**: Использует `tableData` из mockData
- **Функционал**:
  - Tabs с фильтрами
  - Checkbox selection
  - Drag handles (GripVertical)
  - Status badges (Done/In Process)
  - Reviewer assignment
  - Pagination контролы
  - Actions menu

#### `StartPayrollDialog.tsx`

- **Назначение**: Модальное окно создания payroll
- **Сложность**: Высокая
- **Состояние**:
  - `isOpen` - открыто/закрыто
  - `payrollType` - тип payroll (new/repeat)
  - `addRecurring` - чекбокс recurring
- **Функционал**:
  - Radio group выбор типа
  - Form inputs (payroll name, period, payment date)
  - Валидация формы
  - Submit/Cancel actions
  - Controlled dialog state

## Данные (mockData.ts)

### Экспортируемые данные

```typescript
// График посетителей
chartData: Array<{ name: string; value: number }>;
chartConfig: ChartConfig;

// Статистические карточки
statsData: Array<{
  title: string;
  value: string;
  badge: { icon: "up" | "down"; text: string };
  trend: string;
  description: string;
}>;

// Данные таблицы
tableData: Array<{
  header: string;
  type: string;
  status: "done" | "in-process";
  target: string;
  limit: string;
  reviewer: string | null;
}>;

// TypeScript типы
TableRowData: Type;
```

## Использование

### Импорт компонентов

```typescript
import {
  StatsCards,
  VisitorsChart,
  PayrollTable,
  StartPayrollDialog,
} from "./payroll-mcp/components";
```

### Использование в странице

```tsx
export default function PayrollMcp() {
  return (
    <div>
      {/* Statistics Cards */}
      <StatsCards />

      {/* Visitors Chart */}
      <VisitorsChart />

      {/* Payroll Table */}
      <PayrollTable />

      {/* Dialog in header */}
      <StartPayrollDialog />
    </div>
  );
}
```

## Преимущества модульной структуры

✅ **Переиспользование**: Компоненты можно использовать в других частях приложения
✅ **Тестирование**: Каждый компонент можно тестировать отдельно
✅ **Maintainability**: Легко найти и исправить код
✅ **Читабельность**: Главная страница теперь ~285 строк вместо ~750
✅ **Разделение ответственности**: Каждый компонент отвечает за свою часть UI
✅ **Типизация**: TypeScript типы для данных вынесены отдельно

## Зависимости

Все компоненты используют:

- shadcn/ui компоненты
- lucide-react иконки
- recharts для графиков
- Tailwind CSS для стилей

## Дальнейшее развитие

Возможные улучшения:

1. Добавить React Hook Form для формы в StartPayrollDialog
2. Добавить Zod схемы для валидации
3. Заменить mock данные на API calls
4. Добавить тесты для каждого компонента
5. Добавить Storybook для документации компонентов
