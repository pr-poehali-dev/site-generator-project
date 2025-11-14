import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [projects] = useState([
    {
      id: 1,
      name: 'Интернет-магазин',
      url: 'myshop.site',
      status: 'published',
      visits: 1243,
      lastUpdated: '2 часа назад',
      image: 'https://cdn.poehali.dev/projects/dad0eff1-d3ee-4c87-b044-2c7ef4d99370/files/f6f1fde8-f5ce-469e-a00d-c3b8d4f772d8.jpg'
    },
    {
      id: 2,
      name: 'Портфолио',
      url: 'myportfolio.site',
      status: 'draft',
      visits: 0,
      lastUpdated: '1 день назад',
      image: 'https://cdn.poehali.dev/projects/dad0eff1-d3ee-4c87-b044-2c7ef4d99370/files/9c8e77a6-8e20-4d72-b355-c2cfd7db8159.jpg'
    },
    {
      id: 3,
      name: 'Корпоративный сайт',
      url: 'company.site',
      status: 'published',
      visits: 3421,
      lastUpdated: '3 дня назад',
      image: 'https://cdn.poehali.dev/projects/dad0eff1-d3ee-4c87-b044-2c7ef4d99370/files/99c0729a-0c25-483c-b8cc-51ef39ee4630.jpg'
    }
  ]);

  const stats = [
    {
      icon: 'Globe',
      label: 'Всего сайтов',
      value: '3',
      change: '+1 за месяц'
    },
    {
      icon: 'Eye',
      label: 'Просмотры',
      value: '4.6K',
      change: '+12% за неделю'
    },
    {
      icon: 'Users',
      label: 'Посетители',
      value: '2.1K',
      change: '+8% за неделю'
    },
    {
      icon: 'Clock',
      label: 'Среднее время',
      value: '2:34',
      change: '+5% за неделю'
    }
  ];

  return (
    <div className="min-h-screen bg-secondary/30">
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <Icon name="Sparkles" size={28} className="text-primary" />
              <span className="text-2xl font-bold">SiteBuilder</span>
            </Link>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">
                <Icon name="Bell" size={18} />
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="Settings" size={18} />
              </Button>
              <div className="flex items-center gap-2 pl-4 border-l">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                  И
                </div>
                <span className="text-sm font-medium">Иван Иванов</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Мои проекты</h1>
            <p className="text-muted-foreground">Управляйте всеми вашими сайтами в одном месте</p>
          </div>
          <Button size="lg" onClick={() => navigate('/editor')}>
            <Icon name="Plus" size={20} className="mr-2" />
            Создать сайт
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="animate-scale-in" style={{ animationDelay: `${index * 0.05}s` }}>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name={stat.icon as any} size={20} className="text-primary" />
                  </div>
                </div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground mb-2">{stat.label}</div>
                <div className="text-xs text-green-600">{stat.change}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-1 max-w-md">
            <Icon name="Search" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Поиск проектов..." className="pl-10" />
          </div>
          <Button variant="outline">
            <Icon name="Filter" size={18} className="mr-2" />
            Фильтры
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={project.id} className="group hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="aspect-video overflow-hidden rounded-t-lg bg-muted">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl mb-1">{project.name}</CardTitle>
                    <CardDescription className="flex items-center gap-1">
                      <Icon name="Globe" size={14} />
                      {project.url}
                    </CardDescription>
                  </div>
                  <Badge variant={project.status === 'published' ? 'default' : 'secondary'}>
                    {project.status === 'published' ? 'Опубликован' : 'Черновик'}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Icon name="Eye" size={14} />
                    {project.visits.toLocaleString()} просмотров
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Clock" size={14} />
                    {project.lastUpdated}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button className="flex-1" size="sm" onClick={() => navigate(`/editor/${project.id}`)}>
                    <Icon name="Edit" size={14} className="mr-1" />
                    Редактировать
                  </Button>
                  <Button variant="outline" size="sm">
                    <Icon name="ExternalLink" size={14} />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Icon name="MoreVertical" size={14} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}

          <Card className="border-2 border-dashed hover:border-primary transition-colors cursor-pointer group" onClick={() => navigate('/editor')}>
            <CardContent className="flex flex-col items-center justify-center h-full min-h-[300px] text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <Icon name="Plus" size={32} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Создать новый сайт</h3>
              <p className="text-sm text-muted-foreground">
                Выберите шаблон и начните работу
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;