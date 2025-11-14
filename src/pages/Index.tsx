import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const features = [
    {
      icon: 'MousePointer2',
      title: 'Drag-and-Drop конструктор',
      description: 'Создавайте страницы визуально без кода. Просто перетаскивайте элементы и настраивайте их.'
    },
    {
      icon: 'Layout',
      title: 'Библиотека шаблонов',
      description: 'Готовые профессиональные шаблоны для любых типов сайтов — от лендингов до интернет-магазинов.'
    },
    {
      icon: 'Rocket',
      title: 'Автоматический деплой',
      description: 'Встроенный хостинг с мгновенной публикацией. Один клик — и ваш сайт в сети.'
    },
    {
      icon: 'Globe',
      title: 'Управление доменами',
      description: 'Подключайте свои домены и получайте SSL-сертификаты автоматически. Всё настроено за вас.'
    },
    {
      icon: 'BarChart3',
      title: 'Встроенная аналитика',
      description: 'Отслеживайте посещаемость и поведение пользователей прямо в панели управления.'
    },
    {
      icon: 'Search',
      title: 'SEO-оптимизация',
      description: 'Полный набор инструментов для продвижения: метатеги, sitemap, структурированные данные.'
    }
  ];

  const pricing = [
    {
      name: 'Старт',
      price: '0',
      period: 'навсегда',
      description: 'Для первых экспериментов',
      features: [
        '1 сайт',
        '100 MB хранилища',
        'Базовые шаблоны',
        'Поддомен',
        'SSL-сертификат'
      ],
      highlighted: false
    },
    {
      name: 'Профи',
      price: '990',
      period: 'в месяц',
      description: 'Для серьезных проектов',
      features: [
        '5 сайтов',
        '10 GB хранилища',
        'Все шаблоны',
        'Свой домен',
        'Приоритетная поддержка',
        'Расширенная аналитика'
      ],
      highlighted: true
    },
    {
      name: 'Бизнес',
      price: '2990',
      period: 'в месяц',
      description: 'Для агентств и команд',
      features: [
        'Неограниченно сайтов',
        '100 GB хранилища',
        'Белый лейбл',
        'Командная работа',
        'API доступ',
        'Персональный менеджер'
      ],
      highlighted: false
    }
  ];

  const examples = [
    {
      image: 'https://cdn.poehali.dev/projects/dad0eff1-d3ee-4c87-b044-2c7ef4d99370/files/f6f1fde8-f5ce-469e-a00d-c3b8d4f772d8.jpg',
      title: 'Интернет-магазин',
      category: 'E-commerce'
    },
    {
      image: 'https://cdn.poehali.dev/projects/dad0eff1-d3ee-4c87-b044-2c7ef4d99370/files/9c8e77a6-8e20-4d72-b355-c2cfd7db8159.jpg',
      title: 'Портфолио дизайнера',
      category: 'Портфолио'
    },
    {
      image: 'https://cdn.poehali.dev/projects/dad0eff1-d3ee-4c87-b044-2c7ef4d99370/files/99c0729a-0c25-483c-b8cc-51ef39ee4630.jpg',
      title: 'Корпоративный сайт',
      category: 'Бизнес'
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Sparkles" size={28} className="text-primary" />
            <span className="text-2xl font-bold">SiteBuilder</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Возможности</a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">Тарифы</a>
            <a href="#examples" className="text-sm font-medium hover:text-primary transition-colors">Примеры</a>
            <a href="#docs" className="text-sm font-medium hover:text-primary transition-colors">Документация</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button size="sm">Войти</Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center animate-fade-in">
            <Badge className="mb-6" variant="secondary">
              <Icon name="Zap" size={14} className="mr-1" />
              Новое поколение конструкторов
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Создавайте сайты<br />
              <span className="text-primary">без кода</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Профессиональные сайты за минуты. Визуальный редактор, готовые шаблоны и встроенный хостинг — всё в одном месте.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Начать бесплатно
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть демо
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Всё что нужно для создания сайта</h2>
            <p className="text-lg text-muted-foreground">Полный набор инструментов в одной платформе</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={feature.icon as any} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Прозрачные тарифы</h2>
            <p className="text-lg text-muted-foreground">Выберите план под ваши задачи</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {pricing.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative ${plan.highlighted ? 'border-primary border-2 shadow-xl scale-105' : 'border-2'} transition-all duration-300 hover:shadow-lg`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary">Популярный</Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="pt-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">₽</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{plan.period}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={plan.highlighted ? 'default' : 'outline'}>
                    {plan.price === '0' ? 'Начать бесплатно' : 'Выбрать план'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="examples" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Примеры работ</h2>
            <p className="text-lg text-muted-foreground">Сайты, созданные на нашей платформе</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {examples.map((example, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl mb-4 aspect-[4/3] bg-muted">
                  <img 
                    src={example.image} 
                    alt={example.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <Badge variant="secondary" className="mb-2">{example.category}</Badge>
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{example.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="docs" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <Icon name="BookOpen" size={48} className="text-primary mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4">Документация и обучение</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Подробные гайды, видеоуроки и примеры помогут освоить платформу за несколько часов
          </p>
          <Button size="lg" variant="outline">
            Открыть документацию
            <Icon name="ExternalLink" size={18} className="ml-2" />
          </Button>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Готовы начать?</h2>
          <p className="text-xl mb-10 opacity-90">
            Создайте свой первый сайт прямо сейчас. Без кредитной карты.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Начать бесплатно
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white/10">
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Sparkles" size={24} className="text-primary" />
                <span className="text-xl font-bold">SiteBuilder</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Создавайте профессиональные сайты без кода
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Продукт</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Возможности</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Тарифы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Шаблоны</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Ресурсы</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Документация</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Поддержка</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Карьера</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© 2024 SiteBuilder. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
