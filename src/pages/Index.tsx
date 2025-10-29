import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const services = [
    {
      icon: 'Sparkles',
      title: 'Профессиональная гигиена',
      description: 'Комплексная чистка и профилактика заболеваний полости рта',
      price: 'от 3 500 ₽'
    },
    {
      icon: 'Smile',
      title: 'Лечение кариеса',
      description: 'Современные методы лечения с применением качественных материалов',
      price: 'от 4 200 ₽'
    },
    {
      icon: 'Star',
      title: 'Имплантация',
      description: 'Восстановление зубов с пожизненной гарантией',
      price: 'от 35 000 ₽'
    },
    {
      icon: 'Gem',
      title: 'Виниры',
      description: 'Голливудская улыбка за 2 визита',
      price: 'от 18 000 ₽'
    },
    {
      icon: 'Shield',
      title: 'Ортодонтия',
      description: 'Исправление прикуса брекетами и элайнерами',
      price: 'от 120 000 ₽'
    },
    {
      icon: 'Zap',
      title: 'Отбеливание',
      description: 'Безопасное отбеливание на 6-8 тонов',
      price: 'от 15 000 ₽'
    }
  ];

  const doctors = [
    {
      name: 'Анна Сергеевна Волкова',
      specialty: 'Главный врач, стоматолог-терапевт',
      experience: '15 лет опыта',
      education: 'МГМСУ им. Евдокимова'
    },
    {
      name: 'Дмитрий Александрович Петров',
      specialty: 'Стоматолог-ортопед',
      experience: '12 лет опыта',
      education: 'СПбГМУ им. Павлова'
    },
    {
      name: 'Елена Викторовна Смирнова',
      specialty: 'Стоматолог-хирург',
      experience: '10 лет опыта',
      education: 'РНИМУ им. Пирогова'
    }
  ];

  const reviews = [
    {
      name: 'Мария К.',
      rating: 5,
      text: 'Прекрасная клиника! Современное оборудование, внимательный персонал. Особенно благодарна Анне Сергеевне за профессионализм.',
      date: '15 октября 2024'
    },
    {
      name: 'Александр П.',
      rating: 5,
      text: 'Делал имплантацию у Дмитрия Александровича. Всё прошло безболезненно, результатом очень доволен. Рекомендую!',
      date: '8 октября 2024'
    },
    {
      name: 'Ольга Н.',
      rating: 5,
      text: 'Атмосфера спокойствия и уюта. Никакого страха перед визитом к стоматологу. Цены адекватные, качество на высоте.',
      date: '3 октября 2024'
    }
  ];

  const promotions = [
    {
      title: 'Первичный осмотр бесплатно',
      description: 'Для новых пациентов консультация и составление плана лечения — в подарок',
      validity: 'до 31 декабря 2024',
      discount: 'Скидка 100%'
    },
    {
      title: 'Профгигиена + отбеливание',
      description: 'При покупке комплекса — скидка 20% на отбеливание',
      validity: 'до 15 ноября 2024',
      discount: 'Скидка 20%'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background font-open-sans">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Smile" size={32} className="text-secondary" />
              <h1 className="text-2xl font-montserrat font-bold text-foreground">Вивальди</h1>
            </div>
            <div className="hidden md:flex space-x-6">
              {['Главная', 'Услуги', 'Врачи', 'Цены', 'Отзывы', 'Акции', 'О клинике', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="text-sm hover:text-secondary transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
            <Button className="bg-secondary hover:bg-secondary/90">
              Записаться
            </Button>
          </nav>
        </div>
      </header>

      <section id="главная" className="py-20 md:py-32 px-4">
        <div className="container mx-auto text-center animate-fade-in">
          <Badge className="mb-6 bg-accent text-accent-foreground">Современная стоматология</Badge>
          <h2 className="text-4xl md:text-6xl font-montserrat font-bold mb-6 text-foreground">
            Здоровая улыбка —<br />это просто
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Лечим без боли, заботимся с душой. Современное оборудование и опытные врачи в центре Москвы
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Icon name="Calendar" size={20} className="mr-2" />
              Записаться на приём
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection('услуги')}>
              Наши услуги
            </Button>
          </div>
        </div>
      </section>

      <section id="услуги" className="py-20 bg-card px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl md:text-4xl font-montserrat font-bold text-center mb-12">
            Наши услуги
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow animate-scale-in border-border">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={24} className="text-secondary" />
                  </div>
                  <CardTitle className="font-montserrat">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-secondary">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="врачи" className="py-20 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl md:text-4xl font-montserrat font-bold text-center mb-12">
            Наши врачи
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <Card key={index} className="text-center border-border">
                <CardHeader>
                  <div className="w-32 h-32 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" size={48} className="text-muted-foreground" />
                  </div>
                  <CardTitle className="font-montserrat text-xl">{doctor.name}</CardTitle>
                  <CardDescription className="text-base">{doctor.specialty}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p className="flex items-center justify-center gap-2">
                      <Icon name="Award" size={16} />
                      {doctor.experience}
                    </p>
                    <p className="flex items-center justify-center gap-2">
                      <Icon name="GraduationCap" size={16} />
                      {doctor.education}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="цены" className="py-20 bg-card px-4">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-3xl md:text-4xl font-montserrat font-bold text-center mb-12">
            Цены на услуги
          </h3>
          <Tabs defaultValue="therapeutic" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="therapeutic">Терапия</TabsTrigger>
              <TabsTrigger value="orthopedic">Ортопедия</TabsTrigger>
              <TabsTrigger value="surgery">Хирургия</TabsTrigger>
            </TabsList>
            <TabsContent value="therapeutic" className="space-y-4">
              <div className="flex justify-between p-4 border-b border-border">
                <span>Лечение кариеса</span>
                <span className="font-bold">от 4 200 ₽</span>
              </div>
              <div className="flex justify-between p-4 border-b border-border">
                <span>Лечение пульпита (1 канал)</span>
                <span className="font-bold">от 6 500 ₽</span>
              </div>
              <div className="flex justify-between p-4 border-b border-border">
                <span>Профессиональная чистка</span>
                <span className="font-bold">от 3 500 ₽</span>
              </div>
              <div className="flex justify-between p-4 border-b border-border">
                <span>Отбеливание ZOOM</span>
                <span className="font-bold">от 15 000 ₽</span>
              </div>
            </TabsContent>
            <TabsContent value="orthopedic" className="space-y-4">
              <div className="flex justify-between p-4 border-b border-border">
                <span>Керамическая коронка</span>
                <span className="font-bold">от 25 000 ₽</span>
              </div>
              <div className="flex justify-between p-4 border-b border-border">
                <span>Виниры E-max</span>
                <span className="font-bold">от 18 000 ₽</span>
              </div>
              <div className="flex justify-between p-4 border-b border-border">
                <span>Съёмный протез</span>
                <span className="font-bold">от 30 000 ₽</span>
              </div>
            </TabsContent>
            <TabsContent value="surgery" className="space-y-4">
              <div className="flex justify-between p-4 border-b border-border">
                <span>Удаление зуба простое</span>
                <span className="font-bold">от 2 500 ₽</span>
              </div>
              <div className="flex justify-between p-4 border-b border-border">
                <span>Удаление зуба мудрости</span>
                <span className="font-bold">от 5 500 ₽</span>
              </div>
              <div className="flex justify-between p-4 border-b border-border">
                <span>Имплантация (под ключ)</span>
                <span className="font-bold">от 35 000 ₽</span>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="отзывы" className="py-20 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl md:text-4xl font-montserrat font-bold text-center mb-12">
            Отзывы пациентов
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                  </div>
                  <CardDescription className="text-xs">{review.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="акции" className="py-20 bg-card px-4">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-3xl md:text-4xl font-montserrat font-bold text-center mb-12">
            Актуальные акции
          </h3>
          <div className="space-y-6">
            {promotions.map((promo, index) => (
              <Card key={index} className="border-secondary border-2">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="font-montserrat text-xl mb-2">{promo.title}</CardTitle>
                      <CardDescription>{promo.description}</CardDescription>
                    </div>
                    <Badge className="bg-secondary text-white">{promo.discount}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <Icon name="Clock" size={16} />
                    Действует {promo.validity}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="о-клинике" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-3xl md:text-4xl font-montserrat font-bold text-center mb-12">
            О клинике
          </h3>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-center mb-8">
              Стоматологическая клиника «Вивальди» — это современный центр здоровья вашей улыбки в самом центре Москвы. 
              Мы работаем с 2010 года и за это время помогли более 10 000 пациентам обрести здоровые и красивые зубы.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" size={32} className="text-secondary" />
                </div>
                <h4 className="font-montserrat font-bold text-xl mb-2 text-foreground">14 лет опыта</h4>
                <p className="text-sm">Проверенная временем клиника</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={32} className="text-secondary" />
                </div>
                <h4 className="font-montserrat font-bold text-xl mb-2 text-foreground">10 000+ пациентов</h4>
                <p className="text-sm">Доверяют нам своё здоровье</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={32} className="text-secondary" />
                </div>
                <h4 className="font-montserrat font-bold text-xl mb-2 text-foreground">Гарантия качества</h4>
                <p className="text-sm">На все виды работ</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="контакты" className="py-20 bg-card px-4">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-3xl md:text-4xl font-montserrat font-bold text-center mb-12">
            Контакты и запись
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h4 className="font-montserrat font-bold text-xl mb-4">Наши контакты</h4>
                <div className="space-y-3">
                  <p className="flex items-start gap-3">
                    <Icon name="MapPin" size={20} className="text-secondary mt-1" />
                    <span>г. Москва, ул. Тверская, д. 12, стр. 1</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <Icon name="Phone" size={20} className="text-secondary" />
                    <span>+7 (495) 123-45-67</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <Icon name="Mail" size={20} className="text-secondary" />
                    <span>info@vivaldi-dent.ru</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <Icon name="Clock" size={20} className="text-secondary mt-1" />
                    <span>Пн-Пт: 9:00 - 21:00<br />Сб-Вс: 10:00 - 18:00</span>
                  </p>
                </div>
              </div>
            </div>
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="font-montserrat">Записаться на приём</CardTitle>
                <CardDescription>Оставьте заявку, и мы перезвоним вам в течение 15 минут</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Ваше имя" className="border-border" />
                  </div>
                  <div>
                    <Input placeholder="Телефон" type="tel" className="border-border" />
                  </div>
                  <div>
                    <Textarea placeholder="Комментарий (необязательно)" className="border-border" />
                  </div>
                  <Button className="w-full bg-secondary hover:bg-secondary/90">
                    Отправить заявку
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Smile" size={32} />
                <h5 className="text-xl font-montserrat font-bold">Вивальди</h5>
              </div>
              <p className="text-sm opacity-80">
                Современная стоматология в центре Москвы. Лечим без боли, заботимся с душой.
              </p>
            </div>
            <div>
              <h5 className="font-montserrat font-bold mb-4">Навигация</h5>
              <div className="space-y-2 text-sm">
                <p className="cursor-pointer hover:opacity-80" onClick={() => scrollToSection('услуги')}>Услуги</p>
                <p className="cursor-pointer hover:opacity-80" onClick={() => scrollToSection('врачи')}>Врачи</p>
                <p className="cursor-pointer hover:opacity-80" onClick={() => scrollToSection('цены')}>Цены</p>
                <p className="cursor-pointer hover:opacity-80" onClick={() => scrollToSection('контакты')}>Контакты</p>
              </div>
            </div>
            <div>
              <h5 className="font-montserrat font-bold mb-4">Личный кабинет</h5>
              <Button variant="outline" className="w-full bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Icon name="User" size={16} className="mr-2" />
                Войти в ЛК
              </Button>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-80">
            <p>© 2024 Стоматология Вивальди. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
