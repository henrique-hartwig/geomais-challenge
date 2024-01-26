--
-- PostgreSQL database dump
--

-- Dumped from database version 16.1 (Ubuntu 16.1-1.pgdg22.04+1)
-- Dumped by pg_dump version 16.1 (Ubuntu 16.1-1.pgdg22.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: gender; Type: TYPE; Schema: public; Owner: geomais_user
--

CREATE TYPE public.gender AS ENUM (
    'M',
    'F'
);


ALTER TYPE public.gender OWNER TO geomais_user;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: persons; Type: TABLE; Schema: public; Owner: geomais_user
--

CREATE TABLE public.persons (
    id bigint NOT NULL,
    name character varying(100) NOT NULL,
    cpf bigint NOT NULL,
    rg integer NOT NULL,
    birthday date NOT NULL,
    gender public.gender NOT NULL
);


ALTER TABLE public.persons OWNER TO geomais_user;

--
-- Name: persons_id_seq; Type: SEQUENCE; Schema: public; Owner: geomais_user
--

CREATE SEQUENCE public.persons_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.persons_id_seq OWNER TO geomais_user;

--
-- Name: persons_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: geomais_user
--

ALTER SEQUENCE public.persons_id_seq OWNED BY public.persons.id;


--
-- Name: persons id; Type: DEFAULT; Schema: public; Owner: geomais_user
--

ALTER TABLE ONLY public.persons ALTER COLUMN id SET DEFAULT nextval('public.persons_id_seq'::regclass);


--
-- Data for Name: persons; Type: TABLE DATA; Schema: public; Owner: geomais_user
--

COPY public.persons (id, name, cpf, rg, birthday, gender) FROM stdin;
1	Henrique	12345678912	1223122	1993-05-28	M
14	Ana Mendes	65465664645	4564565	2024-01-02	F
19	Francisca Julia da Costa	44534533645	5646556	2024-01-02	F
20	Pamela Fonseca	86675765654	5453415	2022-01-28	F
21	Pablo Souza	76574654266	2431757	2022-01-30	M
24	Barbara Webber	46546536565	5654435	1993-01-14	F
25	Julio Batista	32432443243	4342432	1993-01-14	M
29	Milena Rocha	70808087087	870870	1993-01-14	F
18	Joana Campos	78676576575	7657674	2024-01-25	F
23	Andrei Prato	87658623589	8768467	2024-01-16	M
17	Mario da Silva	11111111111	7657676	1983-12-06	M
15	Carlos Barbosa	65465663232	3232656	2006-01-11	M
28	Renato Campos	77777777777	7868787	1993-01-14	M
\.


--
-- Name: persons_id_seq; Type: SEQUENCE SET; Schema: public; Owner: geomais_user
--

SELECT pg_catalog.setval('public.persons_id_seq', 33, true);


--
-- Name: persons persons_cpf_key; Type: CONSTRAINT; Schema: public; Owner: geomais_user
--

ALTER TABLE ONLY public.persons
    ADD CONSTRAINT persons_cpf_key UNIQUE (cpf);


--
-- Name: persons persons_rg_key; Type: CONSTRAINT; Schema: public; Owner: geomais_user
--

ALTER TABLE ONLY public.persons
    ADD CONSTRAINT persons_rg_key UNIQUE (rg);


--
-- Name: persons pk_persons; Type: CONSTRAINT; Schema: public; Owner: geomais_user
--

ALTER TABLE ONLY public.persons
    ADD CONSTRAINT pk_persons PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

