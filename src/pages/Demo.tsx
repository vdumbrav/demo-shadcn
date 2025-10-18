import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { useTheme } from "@/context/theme-context";
import { cn } from "@/lib/utils";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer
} from "recharts";
import { toast } from "sonner";
import { DataTable, columns, type Payment } from "@/components/data-table";

function Demo() {
  const { theme, setTheme } = useTheme();

  // Chart data
  const chartData = [
    { month: "Jan", revenue: 4000, expenses: 2400, profit: 1600, users: 240, orders: 180 },
    { month: "Feb", revenue: 3000, expenses: 1398, profit: 1602, users: 198, orders: 150 },
    { month: "Mar", revenue: 2000, expenses: 9800, profit: -7800, users: 980, orders: 95 },
    { month: "Apr", revenue: 2780, expenses: 3908, profit: -1128, users: 390, orders: 120 },
    { month: "May", revenue: 1890, expenses: 4800, profit: -2910, users: 480, orders: 85 },
    { month: "Jun", revenue: 2390, expenses: 3800, profit: -1410, users: 380, orders: 110 },
    { month: "Jul", revenue: 3490, expenses: 4300, profit: -810, users: 430, orders: 145 },
    { month: "Aug", revenue: 4200, expenses: 2100, profit: 2100, users: 210, orders: 195 },
    { month: "Sep", revenue: 5100, expenses: 2800, profit: 2300, users: 280, orders: 230 },
    { month: "Oct", revenue: 6200, expenses: 3200, profit: 3000, users: 320, orders: 280 },
    { month: "Nov", revenue: 5800, expenses: 3100, profit: 2700, users: 310, orders: 265 },
    { month: "Dec", revenue: 7200, expenses: 3500, profit: 3700, users: 350, orders: 320 },
  ];

  const pieData = [
    { name: "Development", value: 400, color: "hsl(var(--chart-1))" },
    { name: "Marketing", value: 300, color: "hsl(var(--chart-2))" },
    { name: "Sales", value: 200, color: "hsl(var(--chart-3))" },
    { name: "Support", value: 100, color: "hsl(var(--chart-4))" },
  ];

  const trafficData = [
    { source: "Direct", desktop: 4200, mobile: 2100, tablet: 800 },
    { source: "Social", desktop: 3100, mobile: 4500, tablet: 1200 },
    { source: "Email", desktop: 2800, mobile: 1800, tablet: 600 },
    { source: "Search", desktop: 5200, mobile: 3800, tablet: 1500 },
    { source: "Referral", desktop: 1900, mobile: 2400, tablet: 700 },
  ];

  const categoryData = [
    { category: "Electronics", sales: 18500, growth: 12.5 },
    { category: "Clothing", sales: 15200, growth: 8.3 },
    { category: "Food", sales: 12800, growth: -3.2 },
    { category: "Books", sales: 9500, growth: 15.7 },
    { category: "Sports", sales: 11200, growth: 6.8 },
    { category: "Home", sales: 13900, growth: 9.4 },
  ];

  const userActivityData = [
    { time: "00:00", active: 150 },
    { time: "03:00", active: 80 },
    { time: "06:00", active: 120 },
    { time: "09:00", active: 450 },
    { time: "12:00", active: 680 },
    { time: "15:00", active: 590 },
    { time: "18:00", active: 720 },
    { time: "21:00", active: 480 },
  ];

  const regionData = [
    { name: "Europe", value: 3500, color: "hsl(var(--chart-1))" },
    { name: "North America", value: 4200, color: "hsl(var(--chart-2))" },
    { name: "Asia", value: 5800, color: "hsl(var(--chart-3))" },
    { name: "South America", value: 1200, color: "hsl(var(--chart-4))" },
    { name: "Africa", value: 800, color: "hsl(var(--chart-5))" },
    { name: "Australia", value: 600, color: "hsl(220 70% 50%)" },
  ];

  // Table data
  const tableData = [
    {
      id: "INV001",
      status: "Paid",
      method: "Credit Card",
      amount: "$250.00",
      date: "2024-01-15",
    },
    {
      id: "INV002",
      status: "Pending",
      method: "PayPal",
      amount: "$150.00",
      date: "2024-01-16",
    },
    {
      id: "INV003",
      status: "Unpaid",
      method: "Bank Transfer",
      amount: "$350.00",
      date: "2024-01-17",
    },
    {
      id: "INV004",
      status: "Paid",
      method: "Credit Card",
      amount: "$450.00",
      date: "2024-01-18",
    },
    {
      id: "INV005",
      status: "Paid",
      method: "PayPal",
      amount: "$550.00",
      date: "2024-01-19",
    },
    {
      id: "INV006",
      status: "Pending",
      method: "Credit Card",
      amount: "$200.00",
      date: "2024-01-20",
    },
  ];

  // Payment data for DataTable
  const paymentData: Payment[] = [
    {
      id: "PAY-001",
      amount: 316,
      status: "success",
      email: "john.doe@example.com",
      date: "2024-01-15",
    },
    {
      id: "PAY-002",
      amount: 242,
      status: "pending",
      email: "jane.smith@example.com",
      date: "2024-01-16",
    },
    {
      id: "PAY-003",
      amount: 837,
      status: "processing",
      email: "bob.jones@example.com",
      date: "2024-01-17",
    },
    {
      id: "PAY-004",
      amount: 874,
      status: "success",
      email: "alice.williams@example.com",
      date: "2024-01-18",
    },
    {
      id: "PAY-005",
      amount: 721,
      status: "failed",
      email: "charlie.brown@example.com",
      date: "2024-01-19",
    },
    {
      id: "PAY-006",
      amount: 483,
      status: "success",
      email: "eva.martinez@example.com",
      date: "2024-01-20",
    },
    {
      id: "PAY-007",
      amount: 912,
      status: "processing",
      email: "david.garcia@example.com",
      date: "2024-01-21",
    },
    {
      id: "PAY-008",
      amount: 365,
      status: "success",
      email: "sophia.rodriguez@example.com",
      date: "2024-01-22",
    },
    {
      id: "PAY-009",
      amount: 189,
      status: "pending",
      email: "michael.johnson@example.com",
      date: "2024-01-23",
    },
    {
      id: "PAY-010",
      amount: 654,
      status: "success",
      email: "emma.davis@example.com",
      date: "2024-01-24",
    },
    {
      id: "PAY-011",
      amount: 298,
      status: "failed",
      email: "oliver.wilson@example.com",
      date: "2024-01-25",
    },
    {
      id: "PAY-012",
      amount: 776,
      status: "success",
      email: "ava.taylor@example.com",
      date: "2024-01-26",
    },
    {
      id: "PAY-013",
      amount: 431,
      status: "processing",
      email: "william.anderson@example.com",
      date: "2024-01-27",
    },
    {
      id: "PAY-014",
      amount: 892,
      status: "success",
      email: "isabella.thomas@example.com",
      date: "2024-01-28",
    },
    {
      id: "PAY-015",
      amount: 567,
      status: "pending",
      email: "james.jackson@example.com",
      date: "2024-01-29",
    },
    {
      id: "PAY-016",
      amount: 234,
      status: "success",
      email: "mia.white@example.com",
      date: "2024-01-30",
    },
    {
      id: "PAY-017",
      amount: 789,
      status: "success",
      email: "benjamin.harris@example.com",
      date: "2024-02-01",
    },
    {
      id: "PAY-018",
      amount: 412,
      status: "failed",
      email: "charlotte.martin@example.com",
      date: "2024-02-02",
    },
    {
      id: "PAY-019",
      amount: 923,
      status: "processing",
      email: "lucas.thompson@example.com",
      date: "2024-02-03",
    },
    {
      id: "PAY-020",
      amount: 656,
      status: "success",
      email: "amelia.moore@example.com",
      date: "2024-02-04",
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Paid":
        return <Badge variant="default">Paid</Badge>;
      case "Pending":
        return <Badge variant="secondary">Pending</Badge>;
      case "Unpaid":
        return <Badge variant="destructive">Unpaid</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className={cn("min-h-screen bg-background text-foreground")}>
      {/* Header */}
      <header className={cn("sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60")}>
        <div className={cn("container flex h-16 items-center justify-between px-4")}>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary" />
            <div>
              <h1 className="text-xl font-bold">UI Components Demo</h1>
              <p className="text-xs text-muted-foreground">
                Tailwind v4 + shadcn/ui
              </p>
            </div>
          </div>
          <Select value={theme} onValueChange={(value) => setTheme(value as 'light' | 'dark' | 'system')}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </header>

      {/* Main Content */}
      <main className="container px-4 py-8">
        <div className="space-y-8">
          {/* Breadcrumb */}
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/components">Components</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Demo</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Hero Section */}
          <section className={cn("flex flex-col items-center justify-center py-12 text-center")}>
            <div className={cn("space-y-4")}>
              <h2 className={cn("text-4xl font-bold tracking-tight sm:text-6xl")}>
                Полная демонстрация компонентов
              </h2>
              <p className={cn("text-xl text-muted-foreground max-w-2xl")}>
                Все UI компоненты, графики и таблицы из shadcn/ui с
                поддержкой светлой и тёмной темы
              </p>
              <div className={cn("flex gap-3 justify-center pt-4")}>
                <Button size="lg" onClick={() => toast.success("Добро пожаловать!")}>
                  Начать
                </Button>
                <Button size="lg" variant="outline">
                  Документация
                </Button>
              </div>
            </div>
          </section>

          {/* Alerts */}
          <section className="space-y-4">
            <h3 className="text-2xl font-bold">Уведомления (Alerts)</h3>
            <div className="grid gap-4">
              <Alert>
                <AlertTitle>Информация</AlertTitle>
                <AlertDescription>
                  Это информационное уведомление для пользователя.
                </AlertDescription>
              </Alert>
              <Alert variant="destructive">
                <AlertTitle>Ошибка</AlertTitle>
                <AlertDescription>
                  Произошла ошибка при выполнении операции.
                </AlertDescription>
              </Alert>
            </div>
          </section>

          {/* Tabs Demo */}
          <section>
            <Tabs defaultValue="components" className="w-full">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="components">Компоненты</TabsTrigger>
                <TabsTrigger value="forms">Формы</TabsTrigger>
                <TabsTrigger value="data">Данные</TabsTrigger>
                <TabsTrigger value="charts">Графики</TabsTrigger>
                <TabsTrigger value="advanced">Продвинутые</TabsTrigger>
              </TabsList>

              {/* Components Tab */}
              <TabsContent value="components" className="space-y-6">
                {/* Buttons */}
                <Card>
                  <CardHeader>
                    <CardTitle>Кнопки (Buttons)</CardTitle>
                    <CardDescription>
                      Все варианты кнопок с различными стилями и размерами
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="text-sm font-medium mb-3">Варианты:</h4>
                      <div className="flex flex-wrap gap-3">
                        <Button variant="default">Default</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="destructive">Destructive</Button>
                        <Button variant="outline">Outline</Button>
                        <Button variant="ghost">Ghost</Button>
                        <Button variant="link">Link</Button>
                      </div>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="text-sm font-medium mb-3">Размеры:</h4>
                      <div className="flex flex-wrap items-center gap-3">
                        <Button size="sm">Small</Button>
                        <Button size="default">Default</Button>
                        <Button size="lg">Large</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Badges */}
                <Card>
                  <CardHeader>
                    <CardTitle>Значки (Badges)</CardTitle>
                    <CardDescription>
                      Различные варианты значков для статусов и категорий
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-3">
                      <Badge>Default</Badge>
                      <Badge variant="secondary">Secondary</Badge>
                      <Badge variant="destructive">Destructive</Badge>
                      <Badge variant="outline">Outline</Badge>
                    </div>
                  </CardContent>
                </Card>

                {/* Avatars */}
                <Card>
                  <CardHeader>
                    <CardTitle>Аватары (Avatars)</CardTitle>
                    <CardDescription>
                      Отображение изображений профиля пользователей
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-4 items-center">
                      <Avatar>
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <Avatar>
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <Avatar>
                        <AvatarFallback>AB</AvatarFallback>
                      </Avatar>
                    </div>
                  </CardContent>
                </Card>

                {/* Progress & Skeleton */}
                <Card>
                  <CardHeader>
                    <CardTitle>Прогресс и загрузка</CardTitle>
                    <CardDescription>
                      Индикаторы прогресса и состояния загрузки
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label>Прогресс выполнения:</Label>
                      <Progress value={33} />
                      <Progress value={66} />
                      <Progress value={100} />
                    </div>
                    <Separator />
                    <div className="space-y-2">
                      <Label>Загрузка (Skeleton):</Label>
                      <div className="flex items-center space-x-4">
                        <Skeleton className="h-12 w-12 rounded-full" />
                        <div className="space-y-2">
                          <Skeleton className="h-4 w-[250px]" />
                          <Skeleton className="h-4 w-[200px]" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Dropdown Menu */}
                <Card>
                  <CardHeader>
                    <CardTitle>Выпадающее меню</CardTitle>
                    <CardDescription>
                      Меню с различными опциями и действиями
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline">Открыть меню</Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuLabel>Мой аккаунт</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Профиль</DropdownMenuItem>
                        <DropdownMenuItem>Настройки</DropdownMenuItem>
                        <DropdownMenuItem>Команда</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Выйти</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </CardContent>
                </Card>

                {/* Dialog */}
                <Card>
                  <CardHeader>
                    <CardTitle>Диалоговое окно</CardTitle>
                    <CardDescription>
                      Модальное окно для важных действий
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button>Открыть диалог</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Вы уверены?</DialogTitle>
                          <DialogDescription>
                            Это действие нельзя будет отменить. Вы действительно хотите продолжить?
                          </DialogDescription>
                        </DialogHeader>
                        <div className="flex justify-end gap-3">
                          <Button variant="outline">Отмена</Button>
                          <Button>Продолжить</Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>

                {/* Tooltip */}
                <Card>
                  <CardHeader>
                    <CardTitle>Подсказки (Tooltips)</CardTitle>
                    <CardDescription>
                      Всплывающие подсказки при наведении
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <TooltipProvider>
                      <div className="flex gap-4">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="outline">Наведите на меня</Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Это всплывающая подсказка</p>
                          </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button>Ещё подсказка</Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Полезная информация здесь</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    </TooltipProvider>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Forms Tab */}
              <TabsContent value="forms" className="space-y-6">
                {/* Inputs */}
                <Card>
                  <CardHeader>
                    <CardTitle>Поля ввода (Inputs)</CardTitle>
                    <CardDescription>
                      Различные типы полей для ввода данных
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Email" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Пароль</Label>
                      <Input id="password" type="password" placeholder="Пароль" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="disabled">Отключенное поле</Label>
                      <Input id="disabled" placeholder="Отключено" disabled />
                    </div>
                  </CardContent>
                </Card>

                {/* Textarea */}
                <Card>
                  <CardHeader>
                    <CardTitle>Текстовая область (Textarea)</CardTitle>
                    <CardDescription>
                      Многострочное поле ввода текста
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <Label htmlFor="message">Сообщение</Label>
                      <Textarea id="message" placeholder="Введите ваше сообщение здесь..." />
                    </div>
                  </CardContent>
                </Card>

                {/* Checkbox & Switch */}
                <Card>
                  <CardHeader>
                    <CardTitle>Чекбоксы и переключатели</CardTitle>
                    <CardDescription>
                      Элементы для выбора опций
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      <Label>Чекбоксы:</Label>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="terms" />
                        <Label htmlFor="terms">Принять условия и соглашения</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="marketing" />
                        <Label htmlFor="marketing">Получать маркетинговые рассылки</Label>
                      </div>
                    </div>
                    <Separator />
                    <div className="space-y-3">
                      <Label>Переключатели:</Label>
                      <div className="flex items-center space-x-2">
                        <Switch id="airplane" />
                        <Label htmlFor="airplane">Режим полета</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="notifications" />
                        <Label htmlFor="notifications">Уведомления</Label>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Radio Group */}
                <Card>
                  <CardHeader>
                    <CardTitle>Радио-кнопки</CardTitle>
                    <CardDescription>
                      Выбор одного варианта из нескольких
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup defaultValue="option-one">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-one" id="option-one" />
                        <Label htmlFor="option-one">Вариант 1</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-two" id="option-two" />
                        <Label htmlFor="option-two">Вариант 2</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-three" id="option-three" />
                        <Label htmlFor="option-three">Вариант 3</Label>
                      </div>
                    </RadioGroup>
                  </CardContent>
                </Card>

                {/* Select */}
                <Card>
                  <CardHeader>
                    <CardTitle>Выпадающий список (Select)</CardTitle>
                    <CardDescription>
                      Выбор значения из списка опций
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <Label>Выберите страну:</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите страну" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ru">Россия</SelectItem>
                          <SelectItem value="us">США</SelectItem>
                          <SelectItem value="uk">Великобритания</SelectItem>
                          <SelectItem value="de">Германия</SelectItem>
                          <SelectItem value="fr">Франция</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Data Tab */}
              <TabsContent value="data" className="space-y-6">
                {/* Basic Table */}
                <Card>
                  <CardHeader>
                    <CardTitle>Таблица данных</CardTitle>
                    <CardDescription>
                      Отображение табличных данных с различными статусами
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableCaption>Список последних транзакций</TableCaption>
                      <TableHeader>
                        <TableRow>
                          <TableHead>ID</TableHead>
                          <TableHead>Статус</TableHead>
                          <TableHead>Метод</TableHead>
                          <TableHead>Дата</TableHead>
                          <TableHead className="text-right">Сумма</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {tableData.map((row) => (
                          <TableRow key={row.id}>
                            <TableCell className="font-medium">{row.id}</TableCell>
                            <TableCell>{getStatusBadge(row.status)}</TableCell>
                            <TableCell>{row.method}</TableCell>
                            <TableCell>{row.date}</TableCell>
                            <TableCell className="text-right">{row.amount}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>

                {/* Scrollable Table */}
                <Card>
                  <CardHeader>
                    <CardTitle>Прокручиваемая область</CardTitle>
                    <CardDescription>
                      Контент с прокруткой для больших объемов данных
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[300px] w-full rounded-md border p-4">
                      <div className="space-y-4">
                        {Array.from({ length: 50 }).map((_, i) => (
                          <div key={i} className="text-sm">
                            Элемент списка #{i + 1} - Это демонстрация прокручиваемой области
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>

                {/* Data Table with Features */}
                <Card>
                  <CardHeader>
                    <CardTitle>Продвинутая таблица данных (DataTable)</CardTitle>
                    <CardDescription>
                      Интерактивная таблица с сортировкой, фильтрацией, пагинацией и выбором строк
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <DataTable columns={columns} data={paymentData} />
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Charts Tab */}
              <TabsContent value="charts" className="space-y-6">
                {/* Bar Chart */}
                <Card>
                  <CardHeader>
                    <CardTitle>Столбчатая диаграмма</CardTitle>
                    <CardDescription>
                      Сравнение доходов и расходов по месяцам
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer
                      config={{
                        revenue: {
                          label: "Доходы",
                          color: "hsl(var(--chart-1))",
                        },
                        expenses: {
                          label: "Расходы",
                          color: "hsl(var(--chart-2))",
                        },
                      }}
                      className="h-[400px]"
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={chartData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Legend />
                          <Bar dataKey="revenue" fill="hsl(var(--chart-1))" name="Доходы" />
                          <Bar dataKey="expenses" fill="hsl(var(--chart-2))" name="Расходы" />
                        </BarChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </CardContent>
                </Card>

                {/* Line Chart */}
                <Card>
                  <CardHeader>
                    <CardTitle>Линейный график</CardTitle>
                    <CardDescription>
                      Динамика прибыли за год
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer
                      config={{
                        profit: {
                          label: "Прибыль",
                          color: "hsl(var(--chart-3))",
                        },
                      }}
                      className="h-[400px]"
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={chartData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Legend />
                          <Line
                            type="monotone"
                            dataKey="profit"
                            stroke="hsl(var(--chart-3))"
                            strokeWidth={2}
                            name="Прибыль"
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </CardContent>
                </Card>

                {/* Area Chart */}
                <Card>
                  <CardHeader>
                    <CardTitle>Диаграмма с областью</CardTitle>
                    <CardDescription>
                      Визуализация накопительных показателей
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer
                      config={{
                        revenue: {
                          label: "Доходы",
                          color: "hsl(var(--chart-1))",
                        },
                        expenses: {
                          label: "Расходы",
                          color: "hsl(var(--chart-2))",
                        },
                      }}
                      className="h-[400px]"
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={chartData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Legend />
                          <Area
                            type="monotone"
                            dataKey="revenue"
                            stackId="1"
                            stroke="hsl(var(--chart-1))"
                            fill="hsl(var(--chart-1))"
                            fillOpacity={0.6}
                            name="Доходы"
                          />
                          <Area
                            type="monotone"
                            dataKey="expenses"
                            stackId="1"
                            stroke="hsl(var(--chart-2))"
                            fill="hsl(var(--chart-2))"
                            fillOpacity={0.6}
                            name="Расходы"
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </CardContent>
                </Card>

                {/* Pie Chart */}
                <Card>
                  <CardHeader>
                    <CardTitle>Круговая диаграмма</CardTitle>
                    <CardDescription>
                      Распределение бюджета по департаментам
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer
                      config={{
                        value: {
                          label: "Значение",
                        },
                      }}
                      className="h-[400px]"
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={pieData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                            outerRadius={120}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {pieData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <ChartTooltip content={<ChartTooltipContent />} />
                        </PieChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </CardContent>
                </Card>

                {/* Stacked Bar Chart */}
                <Card>
                  <CardHeader>
                    <CardTitle>Столбчатая диаграмма с накоплением</CardTitle>
                    <CardDescription>
                      Трафик по устройствам из разных источников
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer
                      config={{
                        desktop: {
                          label: "Desktop",
                          color: "hsl(var(--chart-1))",
                        },
                        mobile: {
                          label: "Mobile",
                          color: "hsl(var(--chart-2))",
                        },
                        tablet: {
                          label: "Tablet",
                          color: "hsl(var(--chart-3))",
                        },
                      }}
                      className="h-[400px]"
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={trafficData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="source" />
                          <YAxis />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Legend />
                          <Bar dataKey="desktop" stackId="a" fill="hsl(var(--chart-1))" name="Desktop" />
                          <Bar dataKey="mobile" stackId="a" fill="hsl(var(--chart-2))" name="Mobile" />
                          <Bar dataKey="tablet" stackId="a" fill="hsl(var(--chart-3))" name="Tablet" />
                        </BarChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </CardContent>
                </Card>

                {/* Mixed Chart (Bar + Line) */}
                <Card>
                  <CardHeader>
                    <CardTitle>Комбинированный график</CardTitle>
                    <CardDescription>
                      Продажи по категориям с показателем роста
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer
                      config={{
                        sales: {
                          label: "Продажи",
                          color: "hsl(var(--chart-1))",
                        },
                        growth: {
                          label: "Рост %",
                          color: "hsl(var(--chart-3))",
                        },
                      }}
                      className="h-[400px]"
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={categoryData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="category" />
                          <YAxis yAxisId="left" />
                          <YAxis yAxisId="right" orientation="right" />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Legend />
                          <Bar yAxisId="left" dataKey="sales" fill="hsl(var(--chart-1))" name="Продажи ($)" />
                          <Line
                            yAxisId="right"
                            type="monotone"
                            dataKey="growth"
                            stroke="hsl(var(--chart-3))"
                            strokeWidth={3}
                            name="Рост (%)"
                          />
                        </BarChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </CardContent>
                </Card>

                {/* Smooth Line Chart */}
                <Card>
                  <CardHeader>
                    <CardTitle>График активности пользователей</CardTitle>
                    <CardDescription>
                      Количество активных пользователей в течение дня
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer
                      config={{
                        active: {
                          label: "Активные",
                          color: "hsl(var(--chart-2))",
                        },
                      }}
                      className="h-[400px]"
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={userActivityData}>
                          <defs>
                            <linearGradient id="colorActive" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="hsl(var(--chart-2))" stopOpacity={0.8} />
                              <stop offset="95%" stopColor="hsl(var(--chart-2))" stopOpacity={0} />
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="time" />
                          <YAxis />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Legend />
                          <Area
                            type="monotone"
                            dataKey="active"
                            stroke="hsl(var(--chart-2))"
                            strokeWidth={2}
                            fillOpacity={1}
                            fill="url(#colorActive)"
                            name="Активные пользователи"
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </CardContent>
                </Card>

                {/* Donut Chart */}
                <Card>
                  <CardHeader>
                    <CardTitle>Кольцевая диаграмма</CardTitle>
                    <CardDescription>
                      Распределение продаж по регионам
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer
                      config={{
                        value: {
                          label: "Продажи",
                        },
                      }}
                      className="h-[400px]"
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={regionData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                            outerRadius={120}
                            innerRadius={60}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {regionData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Legend />
                        </PieChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </CardContent>
                </Card>

                {/* Multi-Line Chart */}
                <Card>
                  <CardHeader>
                    <CardTitle>Многострочный график</CardTitle>
                    <CardDescription>
                      Сравнение пользователей и заказов за год
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer
                      config={{
                        users: {
                          label: "Пользователи",
                          color: "hsl(var(--chart-4))",
                        },
                        orders: {
                          label: "Заказы",
                          color: "hsl(var(--chart-5))",
                        },
                      }}
                      className="h-[400px]"
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={chartData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Legend />
                          <Line
                            type="monotone"
                            dataKey="users"
                            stroke="hsl(var(--chart-4))"
                            strokeWidth={2}
                            dot={{ r: 4 }}
                            name="Пользователи"
                          />
                          <Line
                            type="monotone"
                            dataKey="orders"
                            stroke="hsl(var(--chart-5))"
                            strokeWidth={2}
                            dot={{ r: 4 }}
                            name="Заказы"
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </CardContent>
                </Card>

                {/* Horizontal Bar Chart */}
                <Card>
                  <CardHeader>
                    <CardTitle>Горизонтальная столбчатая диаграмма</CardTitle>
                    <CardDescription>
                      Продажи по категориям (топ-6)
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer
                      config={{
                        sales: {
                          label: "Продажи",
                          color: "hsl(var(--chart-1))",
                        },
                      }}
                      className="h-[400px]"
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={categoryData} layout="vertical">
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis type="number" />
                          <YAxis dataKey="category" type="category" width={100} />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Legend />
                          <Bar dataKey="sales" fill="hsl(var(--chart-1))" name="Продажи ($)" />
                        </BarChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Advanced Tab */}
              <TabsContent value="advanced" className="space-y-6">
                {/* Complex Card */}
                <Card>
                  <CardHeader>
                    <CardTitle>Комплексная карточка</CardTitle>
                    <CardDescription>
                      Пример карточки со всеми элементами
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">John Doe</p>
                          <p className="text-xs text-muted-foreground">john@example.com</p>
                        </div>
                      </div>
                      <Badge>Premium</Badge>
                    </div>
                    <Separator />
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Использовано хранилища:</span>
                        <span className="font-medium">65%</span>
                      </div>
                      <Progress value={65} />
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <p className="text-2xl font-bold">24</p>
                        <p className="text-xs text-muted-foreground">Проектов</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold">128</p>
                        <p className="text-xs text-muted-foreground">Задач</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold">8</p>
                        <p className="text-xs text-muted-foreground">Команд</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline">Настройки</Button>
                    <Button>Перейти к проектам</Button>
                  </CardFooter>
                </Card>

                {/* Grid of Cards */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <CardTitle>Продажи</CardTitle>
                      <CardDescription>За этот месяц</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">$45,231.89</div>
                      <p className="text-xs text-muted-foreground mt-1">
                        +20.1% от прошлого месяца
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Подписки</CardTitle>
                      <CardDescription>За этот месяц</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">+2350</div>
                      <p className="text-xs text-muted-foreground mt-1">
                        +180.1% от прошлого месяца
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Активные пользователи</CardTitle>
                      <CardDescription>Прямо сейчас</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">+573</div>
                      <p className="text-xs text-muted-foreground mt-1">
                        +201 с прошлого часа
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Toast Notifications */}
                <Card>
                  <CardHeader>
                    <CardTitle>Всплывающие уведомления (Toast)</CardTitle>
                    <CardDescription>
                      Нажмите на кнопки для отображения уведомлений
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-3">
                      <Button onClick={() => toast.success("Операция выполнена успешно!")}>
                        Успех
                      </Button>
                      <Button
                        variant="destructive"
                        onClick={() => toast.error("Произошла ошибка!")}
                      >
                        Ошибка
                      </Button>
                      <Button
                        variant="secondary"
                        onClick={() => toast.info("Информационное сообщение")}
                      >
                        Инфо
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => toast("Простое уведомление")}
                      >
                        Обычное
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t mt-12">
        <div className="container px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 UI Components Demo. Built with Tailwind v4 + shadcn/ui
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm">
                GitHub
              </Button>
              <Button variant="ghost" size="sm">
                Документация
              </Button>
              <Button variant="ghost" size="sm">
                Figma
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Demo;
