import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedMonth, setSelectedMonth] = useState('');
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.3;
      audio.loop = true;
    }
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };



  const games = [
    {
      id: 1,
      title: "Hard Funkin",
      description: "Ритм-игра с крутыми битами",
      genre: "Ритм",
      rating: "",
      size: "",
      downloads: ""
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
                  <img src="https://cdn.poehali.dev/files/90534e23-2c2a-4d73-a335-bdeb774b7aab.png" alt="Hard Funkin" className="w-8 h-8 rounded-lg object-cover" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full animate-ping opacity-40"></div>
                <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:from-accent hover:to-secondary transition-all duration-500 minecraft-title">Hard Funkin</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button 
                variant="outline" 
                size="sm" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
                onClick={toggleMusic}
              >
                <Icon name={isPlaying ? "Pause" : "Play"} size={16} className="mr-2" />
                {isPlaying ? "Пауза" : "Музыка"}
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                onClick={() => window.open('https://t.me/gamesseli', '_blank')}
              >
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
            <TabsTrigger 
              value="articles" 
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => window.open('https://www.mediafire.com/file/erq0q1ldeg05o8e/hard_funkin.zip/file', '_blank')}
            >
              <Icon name="Download" size={16} />
              <span>Скачать игру (для ПК и телефона)</span>
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
                    <Button 
                      className="w-full game-button"
                      onClick={() => window.open('https://www.mediafire.com/file/lzpnyon1j259uac/fnf.zip/file', '_blank')}
                    >
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
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center p-1">
                    <img src="https://cdn.poehali.dev/files/c2f742f1-65bf-4918-976a-5cd309d8a72e.jpeg" alt="Seli" className="w-full h-full rounded-full object-cover" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Seli</CardTitle>

                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">

                <div className="flex space-x-4">

                  <Button 
                    variant="outline"
                    onClick={() => window.open('https://youtube.com/@seli-i9m?si=TbRYpaL96AKaY-Pw', '_blank')}
                  >
                    <Icon name="Youtube" size={16} className="mr-2" />
                    YouTube
                  </Button>

                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      
      <audio
        ref={audioRef}
        src="https://archive.org/download/AnalogHorrorFunk67/analog-horror-funk-67-dj-raulipues-slowed.mp3"
        preload="auto"
      />
    </div>
  );
};

export default Index;