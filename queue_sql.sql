PGDMP                      }            Queue    17.2    17.2 .    $           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                           false            %           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                           false            &           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                           false            '           1262    17706    Queue    DATABASE     �   CREATE DATABASE "Queue" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_Philippines.1252';
    DROP DATABASE "Queue";
                     postgres    false            �            1259    17847    admin    TABLE       CREATE TABLE public.admin (
    admin_id integer NOT NULL,
    admin_fname character varying(64) NOT NULL,
    admin_lname character varying(64) NOT NULL,
    admin_username character varying(64) NOT NULL,
    admin_password character varying(250) NOT NULL
);
    DROP TABLE public.admin;
       public         heap r       postgres    false            �            1259    17846    admin_admin_id_seq    SEQUENCE     �   CREATE SEQUENCE public.admin_admin_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.admin_admin_id_seq;
       public               postgres    false    218            (           0    0    admin_admin_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.admin_admin_id_seq OWNED BY public.admin.admin_id;
          public               postgres    false    217            �            1259    17872    appointment    TABLE     %  CREATE TABLE public.appointment (
    app_id integer NOT NULL,
    app_date date DEFAULT CURRENT_DATE NOT NULL,
    app_track_id text NOT NULL,
    serv_id integer NOT NULL,
    pat_id integer NOT NULL,
    app_res_status character varying(20) DEFAULT 'Pending'::character varying NOT NULL
);
    DROP TABLE public.appointment;
       public         heap r       postgres    false            �            1259    17871    appointments_app_id_seq    SEQUENCE     �   CREATE SEQUENCE public.appointments_app_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.appointments_app_id_seq;
       public               postgres    false    224            )           0    0    appointments_app_id_seq    SEQUENCE OWNED BY     R   ALTER SEQUENCE public.appointments_app_id_seq OWNED BY public.appointment.app_id;
          public               postgres    false    223            �            1259    17856    patient    TABLE     �  CREATE TABLE public.patient (
    pat_id integer NOT NULL,
    pat_fname character varying(64) NOT NULL,
    pat_lname character varying(64) NOT NULL,
    pat_mname character varying(64),
    pat_extension character varying(10),
    pat_dob date NOT NULL,
    pat_address character varying(20) NOT NULL,
    pat_email character varying(100) NOT NULL,
    pat_gender character varying(20) NOT NULL,
    pat_contact character varying(15) NOT NULL
);
    DROP TABLE public.patient;
       public         heap r       postgres    false            �            1259    17855    patient_pat_id_seq    SEQUENCE     �   CREATE SEQUENCE public.patient_pat_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.patient_pat_id_seq;
       public               postgres    false    220            *           0    0    patient_pat_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.patient_pat_id_seq OWNED BY public.patient.pat_id;
          public               postgres    false    219            �            1259    17894    result    TABLE     �   CREATE TABLE public.result (
    res_id integer NOT NULL,
    res_date date DEFAULT CURRENT_DATE NOT NULL,
    res_file text NOT NULL,
    app_track_id text,
    admin_id integer NOT NULL
);
    DROP TABLE public.result;
       public         heap r       postgres    false            �            1259    17893    result_res_id_seq    SEQUENCE     �   CREATE SEQUENCE public.result_res_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.result_res_id_seq;
       public               postgres    false    226            +           0    0    result_res_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.result_res_id_seq OWNED BY public.result.res_id;
          public               postgres    false    225            �            1259    17865    service    TABLE     l   CREATE TABLE public.service (
    serv_id integer NOT NULL,
    serv_name character varying(64) NOT NULL
);
    DROP TABLE public.service;
       public         heap r       postgres    false            �            1259    17864    service_serv_id_seq    SEQUENCE     �   CREATE SEQUENCE public.service_serv_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.service_serv_id_seq;
       public               postgres    false    222            ,           0    0    service_serv_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.service_serv_id_seq OWNED BY public.service.serv_id;
          public               postgres    false    221            k           2604    17850    admin admin_id    DEFAULT     p   ALTER TABLE ONLY public.admin ALTER COLUMN admin_id SET DEFAULT nextval('public.admin_admin_id_seq'::regclass);
 =   ALTER TABLE public.admin ALTER COLUMN admin_id DROP DEFAULT;
       public               postgres    false    218    217    218            n           2604    17875    appointment app_id    DEFAULT     y   ALTER TABLE ONLY public.appointment ALTER COLUMN app_id SET DEFAULT nextval('public.appointments_app_id_seq'::regclass);
 A   ALTER TABLE public.appointment ALTER COLUMN app_id DROP DEFAULT;
       public               postgres    false    223    224    224            l           2604    17859    patient pat_id    DEFAULT     p   ALTER TABLE ONLY public.patient ALTER COLUMN pat_id SET DEFAULT nextval('public.patient_pat_id_seq'::regclass);
 =   ALTER TABLE public.patient ALTER COLUMN pat_id DROP DEFAULT;
       public               postgres    false    219    220    220            q           2604    17897    result res_id    DEFAULT     n   ALTER TABLE ONLY public.result ALTER COLUMN res_id SET DEFAULT nextval('public.result_res_id_seq'::regclass);
 <   ALTER TABLE public.result ALTER COLUMN res_id DROP DEFAULT;
       public               postgres    false    226    225    226            m           2604    17868    service serv_id    DEFAULT     r   ALTER TABLE ONLY public.service ALTER COLUMN serv_id SET DEFAULT nextval('public.service_serv_id_seq'::regclass);
 >   ALTER TABLE public.service ALTER COLUMN serv_id DROP DEFAULT;
       public               postgres    false    222    221    222                      0    17847    admin 
   TABLE DATA           c   COPY public.admin (admin_id, admin_fname, admin_lname, admin_username, admin_password) FROM stdin;
    public               postgres    false    218   �7                 0    17872    appointment 
   TABLE DATA           f   COPY public.appointment (app_id, app_date, app_track_id, serv_id, pat_id, app_res_status) FROM stdin;
    public               postgres    false    224   p8                 0    17856    patient 
   TABLE DATA           �   COPY public.patient (pat_id, pat_fname, pat_lname, pat_mname, pat_extension, pat_dob, pat_address, pat_email, pat_gender, pat_contact) FROM stdin;
    public               postgres    false    220   �8       !          0    17894    result 
   TABLE DATA           T   COPY public.result (res_id, res_date, res_file, app_track_id, admin_id) FROM stdin;
    public               postgres    false    226   49                 0    17865    service 
   TABLE DATA           5   COPY public.service (serv_id, serv_name) FROM stdin;
    public               postgres    false    222   e:       -           0    0    admin_admin_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.admin_admin_id_seq', 4, true);
          public               postgres    false    217            .           0    0    appointments_app_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.appointments_app_id_seq', 3, true);
          public               postgres    false    223            /           0    0    patient_pat_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.patient_pat_id_seq', 1, true);
          public               postgres    false    219            0           0    0    result_res_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.result_res_id_seq', 17, true);
          public               postgres    false    225            1           0    0    service_serv_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.service_serv_id_seq', 4, true);
          public               postgres    false    221            t           2606    17854    admin admin_admin_username_key 
   CONSTRAINT     c   ALTER TABLE ONLY public.admin
    ADD CONSTRAINT admin_admin_username_key UNIQUE (admin_username);
 H   ALTER TABLE ONLY public.admin DROP CONSTRAINT admin_admin_username_key;
       public                 postgres    false    218            v           2606    17852    admin admin_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.admin
    ADD CONSTRAINT admin_pkey PRIMARY KEY (admin_id);
 :   ALTER TABLE ONLY public.admin DROP CONSTRAINT admin_pkey;
       public                 postgres    false    218            ~           2606    17882 )   appointment appointments_app_track_id_key 
   CONSTRAINT     l   ALTER TABLE ONLY public.appointment
    ADD CONSTRAINT appointments_app_track_id_key UNIQUE (app_track_id);
 S   ALTER TABLE ONLY public.appointment DROP CONSTRAINT appointments_app_track_id_key;
       public                 postgres    false    224            �           2606    17880    appointment appointments_pkey 
   CONSTRAINT     _   ALTER TABLE ONLY public.appointment
    ADD CONSTRAINT appointments_pkey PRIMARY KEY (app_id);
 G   ALTER TABLE ONLY public.appointment DROP CONSTRAINT appointments_pkey;
       public                 postgres    false    224            x           2606    17863    patient patient_pat_email_key 
   CONSTRAINT     ]   ALTER TABLE ONLY public.patient
    ADD CONSTRAINT patient_pat_email_key UNIQUE (pat_email);
 G   ALTER TABLE ONLY public.patient DROP CONSTRAINT patient_pat_email_key;
       public                 postgres    false    220            z           2606    17861    patient patient_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.patient
    ADD CONSTRAINT patient_pkey PRIMARY KEY (pat_id);
 >   ALTER TABLE ONLY public.patient DROP CONSTRAINT patient_pkey;
       public                 postgres    false    220            �           2606    17901    result result_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.result
    ADD CONSTRAINT result_pkey PRIMARY KEY (res_id);
 <   ALTER TABLE ONLY public.result DROP CONSTRAINT result_pkey;
       public                 postgres    false    226            |           2606    17870    service service_pkey 
   CONSTRAINT     W   ALTER TABLE ONLY public.service
    ADD CONSTRAINT service_pkey PRIMARY KEY (serv_id);
 >   ALTER TABLE ONLY public.service DROP CONSTRAINT service_pkey;
       public                 postgres    false    222            �           2606    17888 $   appointment appointments_pat_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.appointment
    ADD CONSTRAINT appointments_pat_id_fkey FOREIGN KEY (pat_id) REFERENCES public.patient(pat_id) ON UPDATE CASCADE ON DELETE CASCADE;
 N   ALTER TABLE ONLY public.appointment DROP CONSTRAINT appointments_pat_id_fkey;
       public               postgres    false    224    4730    220            �           2606    17883 %   appointment appointments_serv_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.appointment
    ADD CONSTRAINT appointments_serv_id_fkey FOREIGN KEY (serv_id) REFERENCES public.service(serv_id) ON UPDATE CASCADE ON DELETE CASCADE;
 O   ALTER TABLE ONLY public.appointment DROP CONSTRAINT appointments_serv_id_fkey;
       public               postgres    false    4732    222    224            �           2606    17907    result result_admin_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.result
    ADD CONSTRAINT result_admin_id_fkey FOREIGN KEY (admin_id) REFERENCES public.admin(admin_id) ON UPDATE CASCADE ON DELETE CASCADE;
 E   ALTER TABLE ONLY public.result DROP CONSTRAINT result_admin_id_fkey;
       public               postgres    false    218    226    4726            �           2606    17902    result result_app_track_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.result
    ADD CONSTRAINT result_app_track_id_fkey FOREIGN KEY (app_track_id) REFERENCES public.appointment(app_track_id) ON UPDATE CASCADE ON DELETE CASCADE;
 I   ALTER TABLE ONLY public.result DROP CONSTRAINT result_app_track_id_fkey;
       public               postgres    false    4734    224    226               �   x�u��n�0  g�;�IlPƴ%$�](J�.Nm��a�y|};�R�7�r:\�QՀ����N���D|56�s�A���_f(u�����3y��Y�#%5K�O#��M�M�%�̼g\�#W'�'[�����x�ob��1OJm�xs+�a��Ζ',�!V�p����̠�h���|��K/�&Ĝ�))Vʹҁ8���jm�ȿ����rO��x��	!�Q�UH         @   x�3�4202�50�54�4426376�4�4�H�K��K�2�P`d�6�t��-�I-I����� 	(�         d   x�3������t�O���L�HL���*��4��4�50�54�442V.)JM-�Qp�,���j�K�OuH�H�-�I�K���4��3153����M�I����� ���      !   !  x�}��n�0E��/ f��̢ݵj�,#Y;��`b��K�Ji���w�ܹ��Y!2�	'&)Ю��8�����%��R�fK(�n���C����|�+�#� ���,��4����+��� c��hw��X��znr�J�Vr��k�U��N��p�-#<���Q�"�@�&�fBѝ��פt�9*��=�GpI���$gG�	(�ތc������}���c>���Dv6e�T$�S�s�هo��"�=��Kul�ﲍ1�.��f[��|x��˴�P�m���<�.�<M�oit��         4   x�3��J��2�L���OQ(I-.�2�,K�KI-�2�LM)�L������ �W     