import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';

const Index = () => {
  const [formStep, setFormStep] = useState(0);
  const [formData, setFormData] = useState({ name: '', age: '', phone: '' });
  const [quizStep, setQuizStep] = useState(0);
  const [pageViews] = useState(Math.floor(Math.random() * 50) + 120);
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowChat(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const progressPercent = ((formStep + 1) / 3) * 100;

  return (
    <div className="min-h-screen bg-white">
      <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${showChat ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
        <div className="bg-white rounded-2xl shadow-2xl border-2 border-primary w-80 overflow-hidden">
          <div className="bg-gradient-to-r from-primary to-secondary text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
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
            <div className="bg-gray-100 rounded-xl p-3 text-sm">
              Здравствуйте! 👋 Помогу подобрать курс для вашего ребёнка
            </div>
            <div className="bg-gray-100 rounded-xl p-3 text-sm">
              Сколько лет вашему ребёнку?
            </div>
          </div>
          <div className="p-4 border-t">
            <Button className="w-full bg-gradient-to-r from-primary to-secondary">
              Написать сообщение
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-primary via-purple-600 to-secondary text-white py-2 text-center text-sm font-semibold animate-pulse">
        🔥 Только сегодня: Первый месяц со скидкой 40% • Осталось мест: 5
      </div>

      <header className="border-b bg-white sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Icon name="Code2" className="text-white" size={22} />
            </div>
            <span className="text-xl font-bold">Hello Code</span>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm">
              <Icon name="Eye" size={16} className="text-gray-400" />
              <span className="text-gray-600">{pageViews} смотрят сейчас</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Icon name="Phone" size={16} className="text-primary" />
              <span className="font-semibold">+7 (999) 123-45-67</span>
            </div>
          </div>

          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            Бесплатный урок
          </Button>
        </div>
      </header>

      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-green-50"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-gradient-to-r from-primary to-secondary text-white border-0 px-6 py-2 text-sm font-bold">
              ⚡ Более 7000 детей научились программировать
            </Badge>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Ваш ребёнок научится{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                создавать игры
              </span>
              {' '}за 30 дней
            </h1>
            
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Индивидуальные онлайн-занятия. Первый результат уже на первом уроке. 
              <span className="font-bold text-primary"> 100% гарантия возврата денег</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-secondary to-green-600 hover:opacity-90 text-xl h-16 px-10 shadow-2xl">
                Начать бесплатно
                <Icon name="Sparkles" size={24} />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-purple-50 text-xl h-16 px-10">
                <Icon name="Play" size={24} />
                Видео 2 мин
              </Button>
            </div>

            <div className="grid md:grid-cols-4 gap-6 pt-12">
              {[
                { num: '7000+', label: 'учеников' },
                { num: '98%', label: 'довольны' },
                { num: '4.9★', label: 'рейтинг' },
                { num: '2 года', label: 'опыт' }
              ].map((stat, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100">
                  <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {stat.num}
                  </div>
                  <div className="text-gray-600 mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Пройдите тест — получите скидку 40%</h2>
            <p className="text-xl text-gray-600">Ответьте на 3 вопроса и узнайте идеальный курс</p>
          </div>

          <Card className="max-w-2xl mx-auto border-2 border-primary shadow-2xl">
            <CardContent className="p-8">
              <Progress value={progressPercent} className="mb-8" />
              
              {quizStep === 0 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">Сколько лет вашему ребёнку?</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {['6-9 лет', '10-12 лет', '13-15 лет', '16+ лет'].map((age) => (
                      <Button 
                        key={age}
                        size="lg"
                        variant="outline"
                        className="h-16 border-2 hover:border-primary hover:bg-purple-50"
                        onClick={() => setQuizStep(1)}
                      >
                        {age}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {quizStep === 1 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">Есть ли опыт программирования?</h3>
                  <div className="space-y-3">
                    {['Никогда не пробовал', 'Немного знаком', 'Уже создавал проекты'].map((exp) => (
                      <Button 
                        key={exp}
                        size="lg"
                        variant="outline"
                        className="w-full h-16 border-2 hover:border-primary hover:bg-purple-50 text-left justify-start"
                        onClick={() => setQuizStep(2)}
                      >
                        {exp}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {quizStep === 2 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">Что хочет создавать?</h3>
                  <div className="space-y-3">
                    {['Игры', 'Сайты', 'Мобильные приложения', 'Всё интересно'].map((interest) => (
                      <Button 
                        key={interest}
                        size="lg"
                        variant="outline"
                        className="w-full h-16 border-2 hover:border-primary hover:bg-purple-50 text-left justify-start"
                        onClick={() => setQuizStep(3)}
                      >
                        {interest}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {quizStep === 3 && (
                <div className="space-y-6 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto">
                    <Icon name="CheckCircle" size={40} className="text-white" />
                  </div>
                  <h3 className="text-3xl font-bold">Отлично! Вам подходит курс Python</h3>
                  <p className="text-gray-600 text-lg">
                    Оставьте контакты — мы свяжемся и запишем на бесплатный урок со скидкой 40%
                  </p>
                  <div className="space-y-3">
                    <Input placeholder="Имя ребёнка" className="h-14 text-lg" />
                    <Input placeholder="Ваш телефон" type="tel" className="h-14 text-lg" />
                    <Button className="w-full h-14 bg-gradient-to-r from-secondary to-green-600 hover:opacity-90 text-lg font-bold">
                      Получить скидку 40%
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Истории успеха наших учеников</h2>
            <p className="text-xl text-gray-300">Реальные результаты за 1-3 месяца</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: 'Максим, 10 лет', result: 'Создал 5 игр в Scratch', before: 'Только играл в игры', after: 'Теперь создаёт их сам', image: '1' },
              { name: 'София, 13 лет', result: 'Разработала свой сайт', before: 'Не знала HTML', after: 'Делает сайты на заказ', image: '2' },
              { name: 'Артём, 11 лет', result: 'Написал Telegram-бота', before: 'Нулевой опыт', after: 'Победил в хакатоне', image: '3' }
            ].map((story, idx) => (
              <Card key={idx} className="bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white hover:scale-105 transition-transform">
                <CardContent className="p-6 space-y-4">
                  <div className="w-full h-48 bg-gradient-to-br from-primary/50 to-secondary/50 rounded-xl flex items-center justify-center">
                    <Icon name="User" size={64} className="text-white/50" />
                  </div>
                  <h3 className="text-xl font-bold">{story.name}</h3>
                  <div className="bg-gradient-to-r from-secondary to-green-600 px-4 py-2 rounded-lg font-bold text-center">
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

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Наши гарантии</h2>
              <p className="text-xl text-gray-600">Вы ничем не рискуете</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: 'Gift', title: 'Первый урок бесплатно', desc: 'Попробуйте без оплаты. Не понравится — просто уйдёте' },
                { icon: 'RefreshCw', title: '100% возврат денег', desc: 'Если за месяц ребёнок не создаст проект — вернём деньги' },
                { icon: 'Shield', title: 'Гарантия качества', desc: 'Все преподаватели — практикующие разработчики' }
              ].map((guarantee, idx) => (
                <Card key={idx} className="border-2 border-green-200 hover:border-green-400 transition-colors">
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-secondary to-green-600 rounded-2xl flex items-center justify-center mx-auto">
                      <Icon name={guarantee.icon as any} className="text-white" size={32} />
                    </div>
                    <h3 className="text-xl font-bold">{guarantee.title}</h3>
                    <p className="text-gray-600">{guarantee.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="border-0 shadow-2xl">
              <CardContent className="p-10">
                <div className="text-center mb-8">
                  <div className="inline-block bg-gradient-to-r from-orange-500 to-red-500 px-6 py-3 rounded-full font-bold text-white mb-4 animate-pulse">
                    ⏰ Акция заканчивается через 3 часа
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    Запишитесь на бесплатный урок
                  </h2>
                  <p className="text-xl text-gray-600">
                    Заполните форму за 30 секунд
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Шаг 1 из 3: Имя ребёнка</label>
                    <Input 
                      placeholder="Например: Максим" 
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({...formData, name: e.target.value});
                        if (e.target.value.length > 2) setFormStep(1);
                      }}
                      className="h-14 text-lg"
                    />
                  </div>

                  {formStep >= 1 && (
                    <div className="space-y-2 animate-fade-in">
                      <label className="text-sm font-semibold text-gray-700">Шаг 2 из 3: Возраст</label>
                      <Input 
                        placeholder="Например: 10 лет" 
                        value={formData.age}
                        onChange={(e) => {
                          setFormData({...formData, age: e.target.value});
                          if (e.target.value.length > 0) setFormStep(2);
                        }}
                        className="h-14 text-lg"
                      />
                    </div>
                  )}

                  {formStep >= 2 && (
                    <div className="space-y-2 animate-fade-in">
                      <label className="text-sm font-semibold text-gray-700">Шаг 3 из 3: Ваш телефон</label>
                      <Input 
                        placeholder="+7 (999) 123-45-67" 
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="h-14 text-lg"
                      />
                    </div>
                  )}

                  <Button 
                    disabled={formStep < 2 || !formData.phone}
                    className="w-full h-16 bg-gradient-to-r from-secondary to-green-600 hover:opacity-90 text-xl font-bold disabled:opacity-50"
                  >
                    Получить бесплатный урок
                    <Icon name="Gift" size={24} />
                  </Button>

                  <div className="flex items-center justify-center gap-4 text-xs text-gray-500 pt-4">
                    <div className="flex items-center gap-1">
                      <Icon name="Lock" size={14} />
                      <span>Безопасно</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Shield" size={14} />
                      <span>Без спама</span>
                    </div>
                    <div className="flex items-center gap-1">
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
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
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
                <div>+7 (999) 123-45-67</div>
                <div>hello@hellocode.ru</div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Соцсети</h4>
              <div className="flex gap-3">
                {['Instagram', 'Youtube', 'MessageCircle'].map((social) => (
                  <div 
                    key={social}
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center cursor-pointer transition-colors"
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
