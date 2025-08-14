import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedMonth, setSelectedMonth] = useState('');



  const games = [
    {
      id: 1,
      title: "Hard Funkin",
      description: "Ритм-игра с крутыми битами",
      genre: "Ритм",
      rating: "4.3",
      size: "180 МБ",
      downloads: "25к"
    }
  ];



  const getCategoryIcon = (categoryId: string) => {
    const categoryIcons: { [key: string]: string } = {
      streams: 'Video',
      reviews: 'Star',
      guides: 'BookOpen',
      news: 'Newspaper'
    };
    return categoryIcons[categoryId] || 'FileText';
  };

  const getCategoryName = (categoryId: string) => {
    const categoryNames: { [key: string]: string } = {
      streams: 'Стрим',
      reviews: 'Обзор',
      guides: 'Гайд',
      news: 'Новости'
    };
    return categoryNames[categoryId] || 'Статья';
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative w-14 h-14 bg-gradient-to-br from-primary via-accent to-secondary rounded-xl flex items-center justify-center animate-bounce-subtle shadow-lg hover:scale-110 transition-transform duration-300 group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-accent/80 rounded-xl blur-sm opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <div className="relative z-10 flex items-center justify-center">
                  <Icon name="Gamepad2" size={26} className="text-white filter drop-shadow-sm" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full animate-ping opacity-40"></div>
                <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:from-accent hover:to-secondary transition-all duration-500 minecraft-title">Hard Funkin</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Icon name="Home" size={16} className="mr-2" />
                Главная
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="User" size={16} className="mr-2" />
                О авторе
              </Button>
              <Button variant="outline" size="sm" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <Icon name="MessageCircle" size={16} className="mr-2" />
                Мой канал Telegram
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="articles" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="articles" className="flex items-center space-x-2">
              <Icon name="FileText" size={16} />
              <span>Статьи</span>
            </TabsTrigger>
            <TabsTrigger value="about" className="flex items-center space-x-2">
              <Icon name="User" size={16} />
              <span>О авторе</span>
            </TabsTrigger>
          </TabsList>

          {/* Articles Tab */}
          <TabsContent value="articles" className="space-y-8">


            {/* Games Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {games.map((game) => (
                <Card key={game.id} className="game-card group">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-t-lg overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center">
                      <Icon name="Gamepad2" size={32} className="text-primary" />
                    </div>
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="category-tag">
                        {game.genre}
                      </Badge>
                      <div className="flex items-center space-x-1 text-muted-foreground">
                        <Icon name="Star" size={14} />
                        <span className="text-sm">{game.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {game.title}
                    </CardTitle>
                    <CardDescription>{game.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <span className="flex items-center space-x-1">
                        <Icon name="HardDrive" size={14} />
                        <span>{game.size}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Icon name="Download" size={14} />
                        <span>{game.downloads}</span>
                      </span>
                    </div>
                    <Button className="w-full game-button">
                      <Icon name="Download" size={16} className="mr-2" />
                      Скачать игру
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* About Tab */}
          <TabsContent value="about" className="space-y-6">
            <Card className="game-card">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                    <Icon name="User" size={24} className="text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Игровой Блогер</CardTitle>
                    <CardDescription className="text-lg">
                      Страстный геймер и контент-мейкер
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Привет! Меня зовут [Имя], и я создаю контент об играх уже более 5 лет. 
                  Начинал с простых обзоров, а теперь делаю подробные гайды, стримлю 
                  и делюсь свежими новостями из мира гейминга.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 rounded-lg bg-primary/10">
                    <div className="text-2xl font-bold text-primary">200+</div>
                    <div className="text-sm text-muted-foreground">Статей написано</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-secondary/10">
                    <div className="text-2xl font-bold text-secondary">50+</div>
                    <div className="text-sm text-muted-foreground">Игр пройдено</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-accent/10">
                    <div className="text-2xl font-bold text-accent">5k+</div>
                    <div className="text-sm text-muted-foreground">Подписчиков</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold flex items-center space-x-2">
                    <Icon name="Gamepad2" size={16} />
                    <span>Любимые жанры</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['RPG', 'Инди', 'Метроидвания', 'Рогалики', 'Платформеры'].map((genre) => (
                      <Badge key={genre} variant="outline">{genre}</Badge>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Button className="game-button">
                    <Icon name="MessageCircle" size={16} className="mr-2" />
                    Написать
                  </Button>
                  <Button variant="outline">
                    <Icon name="Youtube" size={16} className="mr-2" />
                    YouTube
                  </Button>
                  <Button variant="outline">
                    <Icon name="Twitch" size={16} className="mr-2" />
                    Twitch
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;