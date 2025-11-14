import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

interface ComponentData {
  id: string;
  type: string;
  props: any;
}

const Editor = () => {
  const navigate = useNavigate();
  const [components, setComponents] = useState<ComponentData[]>([
    {
      id: '1',
      type: 'hero',
      props: {
        title: 'Добро пожаловать',
        subtitle: 'Создайте что-то удивительное',
        buttonText: 'Начать'
      }
    }
  ]);
  const [selectedComponent, setSelectedComponent] = useState<string | null>('1');
  const [showPreview, setShowPreview] = useState(false);

  const availableComponents = [
    { type: 'hero', icon: 'Heading', label: 'Hero секция', color: 'bg-blue-500' },
    { type: 'text', icon: 'Type', label: 'Текстовый блок', color: 'bg-green-500' },
    { type: 'image', icon: 'Image', label: 'Изображение', color: 'bg-purple-500' },
    { type: 'button', icon: 'MousePointer2', label: 'Кнопка', color: 'bg-orange-500' },
    { type: 'card', icon: 'LayoutGrid', label: 'Карточка', color: 'bg-pink-500' },
    { type: 'form', icon: 'FileText', label: 'Форма', color: 'bg-cyan-500' },
    { type: 'gallery', icon: 'Grid3x3', label: 'Галерея', color: 'bg-indigo-500' },
    { type: 'footer', icon: 'PanelBottom', label: 'Футер', color: 'bg-gray-500' }
  ];

  const addComponent = (type: string) => {
    const newComponent: ComponentData = {
      id: Date.now().toString(),
      type,
      props: getDefaultProps(type)
    };
    setComponents([...components, newComponent]);
    setSelectedComponent(newComponent.id);
  };

  const getDefaultProps = (type: string) => {
    const defaults: Record<string, any> = {
      hero: { title: 'Заголовок', subtitle: 'Подзаголовок', buttonText: 'Кнопка' },
      text: { content: 'Текстовый контент' },
      image: { url: 'https://via.placeholder.com/800x400', alt: 'Изображение' },
      button: { text: 'Нажми меня', variant: 'default' },
      card: { title: 'Заголовок карточки', description: 'Описание карточки' },
      form: { title: 'Форма обратной связи', fields: ['Имя', 'Email', 'Сообщение'] },
      gallery: { images: 3 },
      footer: { text: '© 2024 Все права защищены' }
    };
    return defaults[type] || {};
  };

  const removeComponent = (id: string) => {
    setComponents(components.filter(c => c.id !== id));
    if (selectedComponent === id) {
      setSelectedComponent(null);
    }
  };

  const updateComponentProps = (id: string, newProps: any) => {
    setComponents(components.map(c => 
      c.id === id ? { ...c, props: { ...c.props, ...newProps } } : c
    ));
  };

  const renderComponent = (component: ComponentData) => {
    const isSelected = selectedComponent === component.id;
    
    switch (component.type) {
      case 'hero':
        return (
          <div className={`relative bg-gradient-to-r from-primary/10 to-primary/5 p-16 rounded-lg text-center ${isSelected ? 'ring-2 ring-primary' : ''}`}>
            <h1 className="text-5xl font-bold mb-4">{component.props.title}</h1>
            <p className="text-xl text-muted-foreground mb-6">{component.props.subtitle}</p>
            <button className="bg-primary text-white px-6 py-3 rounded-lg">{component.props.buttonText}</button>
          </div>
        );
      case 'text':
        return (
          <div className={`relative p-8 ${isSelected ? 'ring-2 ring-primary rounded-lg' : ''}`}>
            <p className="text-lg">{component.props.content}</p>
          </div>
        );
      case 'image':
        return (
          <div className={`relative ${isSelected ? 'ring-2 ring-primary rounded-lg' : ''}`}>
            <img src={component.props.url} alt={component.props.alt} className="w-full h-64 object-cover rounded-lg" />
          </div>
        );
      case 'button':
        return (
          <div className={`relative p-8 text-center ${isSelected ? 'ring-2 ring-primary rounded-lg' : ''}`}>
            <button className="bg-primary text-white px-8 py-3 rounded-lg">{component.props.text}</button>
          </div>
        );
      case 'card':
        return (
          <div className={`relative border rounded-lg p-6 ${isSelected ? 'ring-2 ring-primary' : ''}`}>
            <h3 className="text-2xl font-bold mb-2">{component.props.title}</h3>
            <p className="text-muted-foreground">{component.props.description}</p>
          </div>
        );
      case 'form':
        return (
          <div className={`relative border rounded-lg p-8 ${isSelected ? 'ring-2 ring-primary' : ''}`}>
            <h3 className="text-2xl font-bold mb-6">{component.props.title}</h3>
            <div className="space-y-4">
              {component.props.fields.map((field: string, idx: number) => (
                <div key={idx}>
                  <label className="block text-sm font-medium mb-2">{field}</label>
                  <input className="w-full border rounded px-3 py-2" placeholder={`Введите ${field.toLowerCase()}`} />
                </div>
              ))}
              <button className="bg-primary text-white px-6 py-2 rounded-lg mt-4">Отправить</button>
            </div>
          </div>
        );
      case 'gallery':
        return (
          <div className={`relative grid grid-cols-3 gap-4 p-4 ${isSelected ? 'ring-2 ring-primary rounded-lg' : ''}`}>
            {Array.from({ length: component.props.images }).map((_, idx) => (
              <div key={idx} className="aspect-square bg-muted rounded-lg" />
            ))}
          </div>
        );
      case 'footer':
        return (
          <div className={`relative bg-secondary p-8 text-center ${isSelected ? 'ring-2 ring-primary' : ''}`}>
            <p className="text-muted-foreground">{component.props.text}</p>
          </div>
        );
      default:
        return null;
    }
  };

  const renderPropsEditor = () => {
    const component = components.find(c => c.id === selectedComponent);
    if (!component) return <p className="text-muted-foreground text-center py-8">Выберите элемент для редактирования</p>;

    return (
      <div className="space-y-4">
        <h3 className="font-semibold text-lg capitalize">{component.type}</h3>
        <Separator />
        
        {Object.keys(component.props).map((key) => {
          if (Array.isArray(component.props[key])) {
            return (
              <div key={key} className="space-y-2">
                <Label className="capitalize">{key}</Label>
                <p className="text-sm text-muted-foreground">Массив: {component.props[key].length} элементов</p>
              </div>
            );
          }
          
          return (
            <div key={key} className="space-y-2">
              <Label htmlFor={key} className="capitalize">{key}</Label>
              <Input
                id={key}
                value={component.props[key]}
                onChange={(e) => updateComponentProps(component.id, { [key]: e.target.value })}
              />
            </div>
          );
        })}
        
        <Button 
          variant="destructive" 
          className="w-full mt-4"
          onClick={() => removeComponent(component.id)}
        >
          <Icon name="Trash2" size={16} className="mr-2" />
          Удалить элемент
        </Button>
      </div>
    );
  };

  return (
    <div className="h-screen flex flex-col bg-secondary/30">
      <header className="bg-white border-b px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={() => navigate('/dashboard')}>
            <Icon name="ArrowLeft" size={18} className="mr-2" />
            Назад
          </Button>
          <Separator orientation="vertical" className="h-6" />
          <div className="flex items-center gap-2">
            <Icon name="Globe" size={18} className="text-primary" />
            <span className="font-semibold">Мой новый сайт</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={() => setShowPreview(!showPreview)}>
            <Icon name={showPreview ? 'Edit' : 'Eye'} size={16} className="mr-2" />
            {showPreview ? 'Редактор' : 'Превью'}
          </Button>
          <Button size="sm">
            <Icon name="Save" size={16} className="mr-2" />
            Сохранить
          </Button>
          <Button size="sm" className="bg-green-600 hover:bg-green-700">
            <Icon name="Rocket" size={16} className="mr-2" />
            Опубликовать
          </Button>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {!showPreview && (
          <div className="w-80 bg-white border-r flex flex-col">
            <Tabs defaultValue="elements" className="flex-1 flex flex-col">
              <TabsList className="grid w-full grid-cols-2 m-4 mb-0">
                <TabsTrigger value="elements">Элементы</TabsTrigger>
                <TabsTrigger value="properties">Свойства</TabsTrigger>
              </TabsList>
              
              <TabsContent value="elements" className="flex-1 m-0">
                <ScrollArea className="h-full">
                  <div className="p-4 space-y-2">
                    <p className="text-sm text-muted-foreground mb-4">Перетащите элементы на страницу</p>
                    {availableComponents.map((comp) => (
                      <Card
                        key={comp.type}
                        className="p-4 cursor-pointer hover:shadow-md transition-shadow"
                        onClick={() => addComponent(comp.type)}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 ${comp.color} rounded-lg flex items-center justify-center text-white`}>
                            <Icon name={comp.icon as any} size={20} />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium">{comp.label}</p>
                            <p className="text-xs text-muted-foreground">Нажмите чтобы добавить</p>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </ScrollArea>
              </TabsContent>
              
              <TabsContent value="properties" className="flex-1 m-0">
                <ScrollArea className="h-full">
                  <div className="p-4">
                    {renderPropsEditor()}
                  </div>
                </ScrollArea>
              </TabsContent>
            </Tabs>
          </div>
        )}

        <div className="flex-1 overflow-auto">
          <div className="max-w-6xl mx-auto p-8">
            <div className="bg-white rounded-lg shadow-sm min-h-screen">
              <div className="space-y-4 p-8">
                {components.map((component) => (
                  <div
                    key={component.id}
                    onClick={() => setSelectedComponent(component.id)}
                    className="cursor-pointer transition-all hover:opacity-90"
                  >
                    {renderComponent(component)}
                  </div>
                ))}
                
                {components.length === 0 && (
                  <div className="text-center py-20">
                    <Icon name="MousePointer2" size={64} className="mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-2xl font-semibold mb-2">Начните добавлять элементы</h3>
                    <p className="text-muted-foreground">Выберите элемент из левой панели</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {!showPreview && (
          <div className="w-64 bg-white border-l p-4">
            <h3 className="font-semibold mb-4">Структура страницы</h3>
            <ScrollArea className="h-full">
              <div className="space-y-2">
                {components.map((component, index) => (
                  <div
                    key={component.id}
                    onClick={() => setSelectedComponent(component.id)}
                    className={`p-3 rounded-lg cursor-pointer transition-colors ${
                      selectedComponent === component.id ? 'bg-primary text-white' : 'bg-secondary hover:bg-secondary/80'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xs opacity-70">#{index + 1}</span>
                        <span className="font-medium capitalize text-sm">{component.type}</span>
                      </div>
                      <Icon name="GripVertical" size={14} />
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
        )}
      </div>
    </div>
  );
};

export default Editor;
