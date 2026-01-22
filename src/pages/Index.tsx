import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const courses = [
  {
    id: 1,
    title: 'Scratch',
    age: '6-9 лет',
    price: 3990,
    oldPrice: 5990,
    lessons: 8,
    icon: 'Blocks',
    popular: false
  },
  {
    id: 2,
    title: 'Python',
    age: '10-14 лет',
    price: 4990,
    oldPrice: 6990,
    lessons: 12,
    icon: 'Code2',
    popular: true
  },
  {
    id: 3,
    title: 'Web',
    age: '12-16 лет',
    price: 5990,
    oldPrice: 7990,
    lessons: 16,
    icon: 'Globe',
    popular: false
  }
];

const Index = () => {
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 45, seconds: 30 });

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingCTA(window.scrollY > 800);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { hours: prev.hours, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className={`fixed bottom-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-orange-500 text-white p-4 shadow-2xl z-50 transition-transform duration-300 ${showFloatingCTA ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="container mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Icon name="Gift" size={24} />
            <span className="font-bold text-lg">Первый урок БЕСПЛАТНО!</span>
          </div>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-bold">
            Записаться сейчас
          </Button>
        </div>
      </div>

      <header className="border-b bg-white sticky top-0 z-40 shadow-sm">
        <div className="bg-gradient-to-r from-blue-600 to-orange-500 text-white py-2 text-center text-sm font-semibold">
          🎁 Акция! Скидка 30% на первый месяц — осталось {timeLeft.hours}ч {timeLeft.minutes}м {timeLeft.seconds}с
        </div>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-orange-500 rounded-lg flex items-center justify-center">
              <Icon name="Code2" className="text-white" size={22} />
            </div>
            <span className="text-xl font-bold">Hello Code</span>
          </div>
          
          <div className="hidden md:flex items-center gap-3">
            <Icon name="Phone" size={18} className="text-blue-600" />
            <span className="font-semibold">+7 (999) 123-45-67</span>
          </div>

          <Button className="bg-gradient-to-r from-blue-600 to-orange-500 hover:opacity-90">
            Пробный урок
          </Button>
        </div>
      </header>

      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[1.3fr,0.7fr] gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-orange-100 text-orange-600 border-0 px-4 py-2 text-sm font-bold">
                ⚡ Более 5000 детей уже учатся
              </Badge>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Ваш ребёнок создаст первую игру{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">
                  уже на первом уроке
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Индивидуальные онлайн-занятия по программированию. 
                Преподаватель работает только с вашим ребёнком — никаких групп!
              </p>

              <div className="bg-white border-2 border-orange-400 rounded-2xl p-6 space-y-4 shadow-lg">
                <div className="font-bold text-lg mb-3">Бесплатный пробный урок включает:</div>
                {[
                  'Знакомство с преподавателем и платформой',
                  'Создание первого проекта (игра или сайт)',
                  'Индивидуальный план обучения',
                  'Подбор курса под интересы ребёнка'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon name="Check" size={16} className="text-white" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-orange-500 hover:opacity-90 text-lg h-14 shadow-xl">
                  Записаться на бесплатный урок
                  <Icon name="ArrowRight" size={20} />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 text-lg h-14">
                  <Icon name="Play" size={20} />
                  Посмотреть видео
                </Button>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-2">
                  {[1,2,3,4,5].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-orange-400 border-2 border-white"></div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <div className="text-sm text-gray-600">4.9 из 5 — 1200+ отзывов</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-400/30 to-orange-400/30 rounded-3xl blur-2xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/a7ead30e-0514-46d7-8d2d-38c65b9ba37c/files/570bb6c5-19b6-4894-b547-ef76928ee03b.jpg"
                alt="Happy student"
                className="relative rounded-3xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border-2 border-orange-400">
                <div className="text-3xl font-bold text-orange-600">-30%</div>
                <div className="text-sm font-semibold">Скидка сегодня</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="space-y-6">
              <div className="text-red-400 font-bold text-lg">❌ БЕЗ программирования</div>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <Icon name="X" className="text-red-400 shrink-0 mt-1" size={20} />
                  <span>Бесцельно сидит в TikTok и играх</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="X" className="text-red-400 shrink-0 mt-1" size={20} />
                  <span>Только потребляет контент</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="X" className="text-red-400 shrink-0 mt-1" size={20} />
                  <span>Нет полезных навыков</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="X" className="text-red-400 shrink-0 mt-1" size={20} />
                  <span>Непонятно, чем занять ребёнка</span>
                </li>
              </ul>
            </div>

            <div className="space-y-6 bg-gradient-to-br from-blue-600 to-orange-500 p-8 rounded-3xl">
              <div className="text-white font-bold text-lg">✅ С программированием</div>
              <ul className="space-y-4 text-white">
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="text-green-300 shrink-0 mt-1" size={20} />
                  <span className="font-semibold">Создаёт игры и сайты</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="text-green-300 shrink-0 mt-1" size={20} />
                  <span className="font-semibold">Развивает логическое мышление</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="text-green-300 shrink-0 mt-1" size={20} />
                  <span className="font-semibold">Профессия будущего</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="text-green-300 shrink-0 mt-1" size={20} />
                  <span className="font-semibold">Гордится своими проектами</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Выберите курс со скидкой 30%</h2>
            <p className="text-xl text-gray-600">Акция действует только сегодня</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {courses.map((course) => (
              <Card key={course.id} className={`border-2 hover:shadow-2xl transition-all relative ${course.popular ? 'border-orange-400 scale-105' : 'border-gray-200'}`}>
                {course.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                    ⭐ Хит продаж
                  </div>
                )}
                <CardContent className="p-6 space-y-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-orange-500 rounded-xl flex items-center justify-center">
                    <Icon name={course.icon as any} className="text-white" size={28} />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{course.title}</h3>
                    <div className="text-sm text-gray-600">{course.age} • {course.lessons} уроков</div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-blue-600">{course.price} ₽</span>
                      <span className="text-gray-400 line-through text-lg">{course.oldPrice} ₽</span>
                    </div>
                    <div className="text-sm text-green-600 font-semibold">
                      Экономия {course.oldPrice - course.price} ₽
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-blue-600 to-orange-500 hover:opacity-90 h-12 font-bold">
                    Записаться со скидкой
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Часто задаваемые вопросы</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              { q: 'Подойдёт ли курс моему ребёнку?', a: 'Да! Мы подбираем программу под возраст и интересы каждого ребёнка. На пробном уроке преподаватель определит оптимальный курс.' },
              { q: 'Нужны ли какие-то знания для старта?', a: 'Нет, абсолютно никаких знаний не требуется. Мы начинаем с нуля и постепенно переходим к более сложным темам.' },
              { q: 'Как проходят занятия?', a: 'Занятия проходят онлайн в Zoom индивидуально с преподавателем. Длительность урока 60 минут. Ребёнок сразу практикуется на реальных проектах.' },
              { q: 'Что если ребёнку не понравится?', a: 'Первый урок бесплатный — вы ничем не рискуете. Если после пробного урока решите не продолжать, просто скажите нам об этом.' },
              { q: 'Какое оборудование нужно?', a: 'Достаточно компьютера или ноутбука с интернетом. Мы используем простые инструменты, которые работают в браузере.' }
            ].map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="bg-white border-2 rounded-xl px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-orange-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full font-bold">
              ⏰ Осталось мест: 3 из 10
            </div>

            <h2 className="text-4xl md:text-5xl font-bold">
              Запишитесь на бесплатный урок прямо сейчас
            </h2>

            <p className="text-xl text-blue-100">
              Заполните форму и мы свяжемся с вами в течение 15 минут
            </p>

            <Card className="border-0 shadow-2xl">
              <CardContent className="p-8 space-y-4">
                <Input 
                  placeholder="Имя ребёнка" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="h-14 text-lg"
                />
                <Input 
                  placeholder="Ваш телефон" 
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="h-14 text-lg"
                />
                <Button className="w-full h-14 bg-gradient-to-r from-blue-600 to-orange-500 hover:opacity-90 text-lg font-bold">
                  Получить бесплатный урок
                  <Icon name="Gift" size={24} />
                </Button>
                <p className="text-xs text-gray-500 text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </CardContent>
            </Card>

            <div className="flex justify-center gap-8 text-sm text-blue-100">
              <div className="flex items-center gap-2">
                <Icon name="Shield" size={18} />
                <span>Безопасно</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Lock" size={18} />
                <span>Конфиденциально</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle" size={18} />
                <span>Без спама</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-orange-500 rounded-lg flex items-center justify-center">
                  <Icon name="Code2" className="text-white" size={22} />
                </div>
                <span className="text-xl font-bold">Hello Code</span>
              </div>
              <p className="text-gray-400 text-sm">
                Онлайн-школа программирования для детей. Более 5000 довольных учеников.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div>+7 (999) 123-45-67</div>
                <div>hello@hellocode.ru</div>
                <div>Пн-Вс: 9:00 - 21:00</div>
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
