import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [pageViews] = useState(Math.floor(Math.random() * 50) + 120);
  const [showChat, setShowChat] = useState(false);
  
  const [snakeGame, setSnakeGame] = useState({ x: 5, y: 5, score: 0, food: { x: 8, y: 8 }, gameOver: false });
  const [memoryGame, setMemoryGame] = useState({ cards: [] as number[], flipped: [] as number[], matched: [] as number[], moves: 0 });
  const [clickerScore, setClickerScore] = useState(0);
  const [floatingNumbers, setFloatingNumbers] = useState<{id: number, x: number, y: number}[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => setShowChat(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const cards = [...Array(8)].flatMap((_, i) => [i, i]).sort(() => Math.random() - 0.5);
    setMemoryGame({ cards, flipped: [], matched: [], moves: 0 });
  }, []);

  const moveSnake = (direction: string) => {
    if (snakeGame.gameOver) return;
    let { x, y, score, food } = snakeGame;
    
    if (direction === 'up') y = Math.max(0, y - 1);
    if (direction === 'down') y = Math.min(9, y + 1);
    if (direction === 'left') x = Math.max(0, x - 1);
    if (direction === 'right') x = Math.min(9, x + 1);

    if (x === food.x && y === food.y) {
      score += 10;
      food = { x: Math.floor(Math.random() * 10), y: Math.floor(Math.random() * 10) };
    }

    setSnakeGame({ x, y, score, food, gameOver: false });
  };

  const flipCard = (index: number) => {
    if (memoryGame.flipped.length === 2 || memoryGame.matched.includes(index) || memoryGame.flipped.includes(index)) return;
    
    const newFlipped = [...memoryGame.flipped, index];
    setMemoryGame({ ...memoryGame, flipped: newFlipped });

    if (newFlipped.length === 2) {
      setMemoryGame({ ...memoryGame, moves: memoryGame.moves + 1, flipped: newFlipped });
      
      if (memoryGame.cards[newFlipped[0]] === memoryGame.cards[newFlipped[1]]) {
        setTimeout(() => {
          setMemoryGame(prev => ({ ...prev, matched: [...prev.matched, newFlipped[0], newFlipped[1]], flipped: [] }));
        }, 600);
      } else {
        setTimeout(() => {
          setMemoryGame(prev => ({ ...prev, flipped: [] }));
        }, 1000);
      }
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    
    setClickerScore(prev => prev + 1);
    setFloatingNumbers(prev => [...prev, { id, x, y }]);
    
    setTimeout(() => {
      setFloatingNumbers(prev => prev.filter(n => n.id !== id));
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @keyframes float {
          0% { transform: translateY(0) scale(1); opacity: 1; }
          100% { transform: translateY(-50px) scale(1.5); opacity: 0; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.8); opacity: 1; }
          100% { transform: scale(1.4); opacity: 0; }
        }
        .animate-float { animation: float 1s ease-out forwards; }
        .animate-bounce-slow { animation: bounce 2s ease-in-out infinite; }
        .animate-shake { animation: shake 0.5s ease-in-out; }
        .animate-pulse-ring { animation: pulse-ring 1.5s ease-out infinite; }
      `}</style>

      <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${showChat ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
        <div className="bg-white rounded-2xl shadow-2xl border-2 border-primary w-80 overflow-hidden animate-shake">
          <div className="bg-gradient-to-r from-primary to-secondary text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center relative">
                <div className="absolute inset-0 rounded-full bg-green-400 animate-pulse-ring"></div>
                <Icon name="MessageCircle" size={20} />
              </div>
              <div>
                <div className="font-bold text-sm">Помощник</div>
                <div className="text-xs text-purple-100">Онлайн</div>
              </div>
            </div>
            <button onClick={() => setShowChat(false)}>
              <Icon name="X" size={18} />
            </button>
          </div>
          <div className="p-4 space-y-3 max-h-64 overflow-y-auto">
            <div className="bg-gray-100 rounded-xl p-3 text-sm animate-fade-in">
              Здравствуйте! 👋 Помогу подобрать курс для вашего ребёнка
            </div>
            <div className="bg-gray-100 rounded-xl p-3 text-sm animate-fade-in" style={{animationDelay: '0.2s'}}>
              Сколько лет вашему ребёнку?
            </div>
          </div>
          <div className="p-4 border-t">
            <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-transform">
              Написать сообщение
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-primary via-purple-600 to-secondary text-white py-2 text-center text-sm font-semibold animate-pulse">
        🔥 Только сегодня: Первый месяц со скидкой 40% • Осталось мест: 5
      </div>

      <header className="border-b bg-white sticky top-0 z-40 shadow-sm backdrop-blur-lg bg-white/90">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
              <Icon name="Code2" className="text-white" size={22} />
            </div>
            <span className="text-xl font-bold">Hello Code</span>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm animate-bounce-slow">
              <Icon name="Eye" size={16} className="text-gray-400" />
              <span className="text-gray-600">{pageViews} смотрят сейчас</span>
            </div>
            <div className="flex items-center gap-2 text-sm hover:scale-110 transition-transform">
              <Icon name="Phone" size={16} className="text-primary" />
              <span className="font-semibold">+7 (999) 123-45-67</span>
            </div>
          </div>

          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 hover:scale-105 transition-all">
            Бесплатный урок
          </Button>
        </div>
      </header>

      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-green-50"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-gradient-to-r from-primary to-secondary text-white border-0 px-6 py-2 text-sm font-bold animate-bounce-slow">
                ⚡ Более 7000 детей научились программировать
              </Badge>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Ваш ребёнок научится{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-pulse">
                  создавать игры
                </span>
                {' '}за 30 дней
              </h1>
              
              <p className="text-xl text-gray-600">
                Индивидуальные онлайн-занятия. Первый результат уже на первом уроке. 
                <span className="font-bold text-primary"> 100% гарантия возврата денег</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-secondary to-green-600 hover:opacity-90 text-lg h-14 px-8 shadow-2xl hover:scale-105 transition-all">
                  Начать бесплатно
                  <Icon name="Sparkles" size={20} />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-purple-50 text-lg h-14 px-8 hover:scale-105 transition-all">
                  <Icon name="Play" size={20} />
                  Видео 2 мин
                </Button>
              </div>

              <div className="grid grid-cols-4 gap-4 pt-8">
                {[
                  { num: '7000+', label: 'учеников' },
                  { num: '98%', label: 'довольны' },
                  { num: '4.9★', label: 'рейтинг' },
                  { num: '2 года', label: 'опыт' }
                ].map((stat, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-4 shadow-lg border-2 border-gray-100 hover:scale-110 hover:border-primary transition-all cursor-pointer">
                    <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {stat.num}
                    </div>
                    <div className="text-gray-600 text-xs mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl animate-pulse"></div>
              <img 
                src="https://cdn.poehali.dev/projects/a7ead30e-0514-46d7-8d2d-38c65b9ba37c/files/d551c54f-6b3a-4dbf-a991-853778ba532c.jpg"
                alt="Hello Code mascot"
                className="relative rounded-3xl shadow-2xl w-full animate-bounce-slow"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Попробуй программирование прямо сейчас! 🎮</h2>
            <p className="text-xl text-gray-600">Интерактивные игры для знакомства с кодом</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 border-primary hover:shadow-2xl transition-all hover:scale-105">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold">Змейка</h3>
                  <Badge className="bg-gradient-to-r from-primary to-secondary text-white">
                    Счёт: {snakeGame.score}
                  </Badge>
                </div>
                
                <div className="grid grid-cols-10 gap-1 bg-gray-900 p-2 rounded-xl">
                  {[...Array(100)].map((_, idx) => {
                    const x = idx % 10;
                    const y = Math.floor(idx / 10);
                    const isSnake = x === snakeGame.x && y === snakeGame.y;
                    const isFood = x === snakeGame.food.x && y === snakeGame.food.y;
                    return (
                      <div
                        key={idx}
                        className={`aspect-square rounded ${
                          isSnake ? 'bg-gradient-to-r from-primary to-secondary animate-pulse' : 
                          isFood ? 'bg-green-500 animate-bounce' : 
                          'bg-gray-800'
                        }`}
                      />
                    );
                  })}
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div></div>
                  <Button onClick={() => moveSnake('up')} className="bg-primary hover:bg-primary/80">
                    <Icon name="ArrowUp" size={20} />
                  </Button>
                  <div></div>
                  <Button onClick={() => moveSnake('left')} className="bg-primary hover:bg-primary/80">
                    <Icon name="ArrowLeft" size={20} />
                  </Button>
                  <Button onClick={() => moveSnake('down')} className="bg-primary hover:bg-primary/80">
                    <Icon name="ArrowDown" size={20} />
                  </Button>
                  <Button onClick={() => moveSnake('right')} className="bg-primary hover:bg-primary/80">
                    <Icon name="ArrowRight" size={20} />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary hover:shadow-2xl transition-all hover:scale-105">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold">Память</h3>
                  <Badge className="bg-gradient-to-r from-secondary to-green-600 text-white">
                    Ходы: {memoryGame.moves}
                  </Badge>
                </div>

                <div className="grid grid-cols-4 gap-2">
                  {memoryGame.cards.map((card, idx) => {
                    const isFlipped = memoryGame.flipped.includes(idx) || memoryGame.matched.includes(idx);
                    const emojis = ['🚀', '🎮', '💻', '🤖', '⚡', '🎨', '🎯', '🌟'];
                    
                    return (
                      <div
                        key={idx}
                        onClick={() => flipCard(idx)}
                        className={`aspect-square rounded-xl flex items-center justify-center text-3xl cursor-pointer transition-all transform ${
                          isFlipped 
                            ? 'bg-gradient-to-br from-secondary to-green-600 rotate-0' 
                            : 'bg-gradient-to-br from-gray-300 to-gray-400 hover:scale-110'
                        }`}
                      >
                        {isFlipped ? emojis[card] : '?'}
                      </div>
                    );
                  })}
                </div>

                {memoryGame.matched.length === memoryGame.cards.length && memoryGame.cards.length > 0 && (
                  <div className="text-center text-green-600 font-bold animate-bounce">
                    🎉 Победа! Ходов: {memoryGame.moves}
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-500 hover:shadow-2xl transition-all hover:scale-105">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold">Кликер</h3>
                  <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                    Клики: {clickerScore}
                  </Badge>
                </div>

                <div 
                  onClick={handleClick}
                  className="relative h-64 bg-gradient-to-br from-orange-100 to-red-100 rounded-xl flex items-center justify-center cursor-pointer hover:scale-105 transition-transform overflow-hidden"
                >
                  <div className="text-6xl animate-bounce-slow">
                    🎯
                  </div>
                  
                  {floatingNumbers.map(num => (
                    <div
                      key={num.id}
                      className="absolute text-2xl font-bold text-primary animate-float pointer-events-none"
                      style={{ left: num.x, top: num.y }}
                    >
                      +1
                    </div>
                  ))}
                </div>

                <p className="text-center text-gray-600">
                  Кликай по цели и набирай очки!
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-xl text-gray-700 mb-6">
              Твой ребёнок создаст свои игры на первом уроке! 🎮
            </p>
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg h-14 px-10 hover:scale-110 transition-all shadow-2xl">
              Записаться на бесплатный урок
              <Icon name="Rocket" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Как проходит обучение</h2>
              <p className="text-xl text-gray-600">Простой путь от новичка до создателя игр</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { num: '1', icon: 'UserPlus', title: 'Бесплатный урок', desc: 'Знакомство с преподавателем и платформой' },
                { num: '2', icon: 'Lightbulb', title: 'Учим основы', desc: 'Переменные, циклы, условия — просто и весело' },
                { num: '3', icon: 'Gamepad2', title: 'Создаём проект', desc: 'Ребёнок делает свою первую игру' },
                { num: '4', icon: 'Trophy', title: 'Показываем миру', desc: 'Публикуем проект и получаем сертификат' }
              ].map((step, idx) => (
                <div key={idx} className="relative group">
                  <div className="text-center space-y-4 hover:scale-110 transition-transform">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto group-hover:rotate-12 transition-transform shadow-lg">
                      <Icon name={step.icon as any} className="text-white" size={36} />
                    </div>
                    <div className="absolute -top-2 -left-2 w-12 h-12 bg-white border-4 border-primary rounded-full flex items-center justify-center font-bold text-xl text-primary shadow-lg">
                      {step.num}
                    </div>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.desc}</p>
                  </div>
                  {idx < 3 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary to-secondary -z-10"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 bg-primary rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-secondary rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Истории успеха наших учеников</h2>
            <p className="text-xl text-gray-300">Реальные результаты за 1-3 месяца</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: 'Максим, 10 лет', result: 'Создал 5 игр в Scratch', before: 'Только играл в игры', after: 'Теперь создаёт их сам' },
              { name: 'София, 13 лет', result: 'Разработала свой сайт', before: 'Не знала HTML', after: 'Делает сайты на заказ' },
              { name: 'Артём, 11 лет', result: 'Написал Telegram-бота', before: 'Нулевой опыт', after: 'Победил в хакатоне' }
            ].map((story, idx) => (
              <Card key={idx} className="bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white hover:scale-105 hover:bg-white/15 transition-all">
                <CardContent className="p-6 space-y-4">
                  <div className="w-full h-48 bg-gradient-to-br from-primary/50 to-secondary/50 rounded-xl flex items-center justify-center overflow-hidden">
                    <Icon name="User" size={64} className="text-white/50" />
                  </div>
                  <h3 className="text-xl font-bold">{story.name}</h3>
                  <div className="bg-gradient-to-r from-secondary to-green-600 px-4 py-2 rounded-lg font-bold text-center animate-pulse">
                    {story.result}
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <Icon name="X" size={16} className="text-red-400 shrink-0 mt-1" />
                      <span className="text-gray-300">{story.before}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-green-400 shrink-0 mt-1" />
                      <span className="text-white font-semibold">{story.after}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, idx) => (
            <div
              key={idx}
              className="absolute animate-bounce-slow"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            >
              {['⚡', '🚀', '💻', '🎮', '🌟'][Math.floor(Math.random() * 5)]}
            </div>
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <Card className="border-0 shadow-2xl">
              <CardContent className="p-10">
                <div className="text-center mb-8">
                  <div className="inline-block bg-gradient-to-r from-orange-500 to-red-500 px-6 py-3 rounded-full font-bold text-white mb-4 animate-pulse">
                    ⏰ Акция заканчивается сегодня
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    Запишитесь на бесплатный урок
                  </h2>
                  <p className="text-xl text-gray-600">
                    Заполните форму за 10 секунд
                  </p>
                </div>

                <div className="space-y-4">
                  <Input 
                    placeholder="Имя ребёнка" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="h-14 text-lg hover:scale-105 transition-transform"
                  />

                  <Input 
                    placeholder="+7 (999) 123-45-67" 
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="h-14 text-lg hover:scale-105 transition-transform"
                  />

                  <Button 
                    disabled={!formData.name || !formData.phone}
                    className="w-full h-16 bg-gradient-to-r from-secondary to-green-600 hover:opacity-90 hover:scale-105 text-xl font-bold disabled:opacity-50 transition-all"
                  >
                    Получить бесплатный урок
                    <Icon name="Gift" size={24} />
                  </Button>

                  <div className="flex items-center justify-center gap-4 text-xs text-gray-500 pt-4">
                    <div className="flex items-center gap-1 hover:scale-110 transition-transform">
                      <Icon name="Lock" size={14} />
                      <span>Безопасно</span>
                    </div>
                    <div className="flex items-center gap-1 hover:scale-110 transition-transform">
                      <Icon name="Shield" size={14} />
                      <span>Без спама</span>
                    </div>
                    <div className="flex items-center gap-1 hover:scale-110 transition-transform">
                      <Icon name="CheckCircle" size={14} />
                      <span>Перезвоним за 15 мин</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 group cursor-pointer">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
                  <Icon name="Code2" className="text-white" size={22} />
                </div>
                <span className="text-xl font-bold">Hello Code</span>
              </div>
              <p className="text-gray-400 text-sm">
                Онлайн-школа программирования для детей
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="hover:text-white transition-colors cursor-pointer">+7 (999) 123-45-67</div>
                <div className="hover:text-white transition-colors cursor-pointer">hello@hellocode.ru</div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Соцсети</h4>
              <div className="flex gap-3">
                {['Instagram', 'Youtube', 'MessageCircle'].map((social) => (
                  <div 
                    key={social}
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center cursor-pointer transition-all hover:scale-110"
                  >
                    <Icon name={social as any} size={20} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>© 2026 Hello Code. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
