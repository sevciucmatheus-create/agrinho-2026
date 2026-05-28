<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Projeto Agrinho 2026 | Inovação e Sustentabilidade</title>
    <!-- Google Fonts & FontAwesome para ícones -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <style>
        /* Variáveis de Cores (Paleta Agrinho Moderno) */
        :root {
            --primary: #2e7d32;
            --primary-light: #4caf50;
            --secondary: #8d6e63;
            --dark: #1b5e20;
            --light: #f1f8e9;
            --white: #ffffff;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Poppins', sans-serif;
        }

        body {
            background-color: var(--light);
            color: #333;
            line-height: 1.6;
        }

        /* Cabeçalho / Navbar */
        header {
            background-color: var(--white);
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 1000;
        }

        .nav-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            font-size: 24px;
            font-weight: 700;
            color: var(--primary);
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .nav-menu {
            display: flex;
            list-style: none;
            gap: 20px;
        }

        .nav-menu a {
            text-decoration: none;
            color: #555;
            font-weight: 600;
            transition: color 0.3s;
        }

        .nav-menu a:hover {
            color: var(--primary);
        }

        /* Seção Hero (Banner Principal) */
        .hero {
            background: linear-gradient(rgba(46, 125, 50, 0.8), rgba(27, 94, 32, 0.9)), url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1920&q=80') no-repeat center center/cover;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            color: var(--white);
            padding: 0 20px;
            margin-top: 60px;
        }

        .hero-content h1 {
            font-size: 3.5rem;
            margin-bottom: 20px;
            animation: fadeInUp 1s ease;
        }

        .hero-content p {
            font-size: 1.2rem;
            max-width: 600px;
            margin: 0 auto 30px;
            animation: fadeInUp 1.2s ease;
        }

        .btn {
            display: inline-block;
            background-color: var(--white);
            color: var(--dark);
            padding: 12px 30px;
            text-decoration: none;
            font-weight: 600;
            border-radius: 30px;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }

        .btn:hover {
            background-color: var(--primary-light);
            color: var(--white);
            transform: translateY(-3px);
        }

        /* Seções Gerais */
        section {
            padding: 80px 20px;
            max-width: 1200px;
            margin: 0 auto;
        }

        .section-title {
            text-align: center;
            font-size: 2.5rem;
            color: var(--dark);
            margin-bottom: 50px;
            position: relative;
        }

        .section-title::after {
            content: '';
            display: block;
            width: 60px;
            height: 4px;
            background-color: var(--primary-light);
            margin: 10px auto 0;
            border-radius: 2px;
        }

        /* Cards de Pilares / Objetivos */
        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
        }

        .card {
            background-color: var(--white);
            padding: 40px 30px;
            border-radius: 15px;
            text-align: center;
            box-shadow: 0 10px 30px rgba(0,0,0,0.05);
            transition: transform 0.3s, box-shadow 0.3s;
        }

        .card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 35px rgba(46, 125, 50, 0.15);
        }

        .card i {
            font-size: 3rem;
            color: var(--primary-light);
            margin-bottom: 20px;
        }

        .card h3 {
            margin-bottom: 15px;
            color: var(--dark);
        }

        /* Seção Sobre / Conteúdo */
        .about-container {
            display: flex;
            align-items: center;
            gap: 50px;
            flex-wrap: wrap;
        }

        .about-text {
            flex: 1;
            min-width: 300px;
        }

        .about-text p {
            margin-bottom: 20px;
            font-size: 1.1rem;
            color: #555;
        }

        .about-img {
            flex: 1;
            min-width: 300px;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .about-img img {
            width: 100%;
            height: auto;
            display: block;
        }

        /* Rodapé */
        footer {
            background-color: var(--dark);
            color: var(--white);
            text-align: center;
            padding: 30px 20px;
            margin-top: 50px;
        }

        /* Animações */
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* Responsividade */
        @media (max-width: 768px) {
            .hero-content h1 { font-size: 2.3rem; }
            .nav-menu { display: none; } /* Simplificado para o exemplo */
        }
    </style>
</head>
<body>

    <!-- Header -->
    <header>
        <div class="nav-container">
            <div class="logo">
                <i class="fa-solid fa-seedling"></i> Agrinho 2026
            </div>
            <ul class="nav-menu">
                <li><a href="#inicio">Início</a></li>
                <li><a href="#pilares">Pilares</a></li>
                <li><a href="#sobre">Nosso Projeto</a></li>
            </ul>
        </div>
    </header>

    <!-- Hero Section -->
    <section id="inicio" class="hero">
        <div class="hero-content">
            <h1>Sustentabilidade e Inovação no Campo</h1>
            <p>Conectando a tecnologia do futuro com a sabedoria da terra para transformar a nossa comunidade do Agrinho 2026.</p>
            <a href="#sobre" class="btn">Conheça o Projeto</a>
        </div>
    </section>

    <!-- Pilares -->
    <section id="pilares">
        <h2 class="section-title">Nossos Pilares</h2>
        <div class="grid">
            <div class="card">
                <i class="fa-solid fa-leaf"></i>
                <h3>Sustentabilidade</h3>
                <p>Preservação do meio ambiente e uso consciente dos recursos naturais para garantir o futuro das próximas gerações.</p>
            </div>
            <div class="card">
                <i class="fa-solid fa-microchip"></i>
                <h3>Tecnologia</h3>
                <p>A aplicação da tecnologia e inteligência digital no campo para otimizar processos e reduzir desperdícios.</p>
            </div>
            <div class="card">
                <i class="fa-solid fa-graduation-cap"></i>
                <h3>Educação</h3>
                <p>Compartilhando conhecimento e conscientizando a comunidade escolar sobre a importância do agronegócio sustentável.</p>
            </div>
        </div>
    </section>

    <!-- Sobre o Projeto -->
    <section id="sobre" style="background-color: #ffffff; max-width: 100%; padding: 80px calc((100% - 1200px)/2);">
        <div style="max-width: 1200px; margin: 0 auto; padding: 0 20px;">
            <h2 class="section-title">Sobre o Nosso Projeto</h2>
            <div class="about-container">
                <div class="about-text">
                    <p>Bem-vindo ao portal do nosso projeto para o **Agrinho 2026**. Este espaço foi desenvolvido para apresentar nossas ideias, pesquisas e soluções para um ecossistema agrícola mais forte e equilibrado.</p>
                    <p>Aqui, unimos a criatividade dos estudantes com práticas reais que podem mudar o dia a dia da nossa comunidade escolar e rural. Explore e faça parte dessa mudança!</p>
                </div>
                <div class="about-img">
                    <img src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=600&q=80" alt="Plantação sustentável">
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <p>&copy; 2026 Projeto Agrinho. Desenvolvido com <i class="fa-solid fa-heart" style="color: #e57373;"></i> para o Futuro do Campo.</p>
    </footer>

</body>
</html>
