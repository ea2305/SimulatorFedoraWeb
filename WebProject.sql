-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 12-03-2016 a las 04:02:09
-- Versión del servidor: 10.1.10-MariaDB
-- Versión de PHP: 5.6.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `WebProject`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Notes`
--

CREATE TABLE `Notes` (
  `id` smallint(6) NOT NULL,
  `text` text NOT NULL,
  `key_note` smallint(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `Notes`
--

INSERT INTO `Notes` (`id`, `text`, `key_note`) VALUES
(1, 'Realizar los bloqueos por regiones', 2),
(1, 'Cosas por terminar en proyecto ...', 1),
(13, 'nota', 1),
(2, 'otra nota', 2),
(2, 'Nueva nota para usuario invitado', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Users`
--

CREATE TABLE `Users` (
  `id` smallint(6) NOT NULL,
  `name` varchar(40) NOT NULL,
  `password` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `state` tinyint(1) NOT NULL,
  `img` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `Users`
--

INSERT INTO `Users` (`id`, `name`, `password`, `email`, `state`, `img`) VALUES
(0, 'Mono', '1234', 'mono@gmail.com', 0, './public/img/users/other.png'),
(1, 'Elihu', '1234', 'ea_2305@hotmail.com', 1, './public/img/users/elihu.png'),
(2, 'Invitado', '', 'invitado@gmail.com', 0, './public/img/users/invitado.png'),
(13, 'Oscar Alejandro', 'oscar', 'oscar@hotmail.com', 0, './public/img/users/other.png');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `Users`
--
ALTER TABLE `Users`
  MODIFY `id` smallint(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
