PGDMP      1                |            ecoas_db_final    16.3 (Postgres.app)    16.1 A    k           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            l           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            m           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            n           1262    16590    ecoas_db_final    DATABASE     z   CREATE DATABASE ecoas_db_final WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.UTF-8';
    DROP DATABASE ecoas_db_final;
                ecoa    false            �            1259    16673    ecoa_individual    TABLE     o   CREATE TABLE public.ecoa_individual (
    id integer NOT NULL,
    resumen text,
    inscrito_en_id integer
);
 #   DROP TABLE public.ecoa_individual;
       public         heap    ecoa    false            �            1259    16672    ecoa_individual_id_seq    SEQUENCE     �   CREATE SEQUENCE public.ecoa_individual_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.ecoa_individual_id_seq;
       public          ecoa    false    226            o           0    0    ecoa_individual_id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.ecoa_individual_id_seq OWNED BY public.ecoa_individual.id;
          public          ecoa    false    225            �            1259    16640    encuesta    TABLE     }   CREATE TABLE public.encuesta (
    id integer NOT NULL,
    pregunta text,
    respuesta text,
    inscrito_en_id integer
);
    DROP TABLE public.encuesta;
       public         heap    ecoa    false            �            1259    16639    encuesta_id_seq    SEQUENCE     �   CREATE SEQUENCE public.encuesta_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.encuesta_id_seq;
       public          ecoa    false    224            p           0    0    encuesta_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.encuesta_id_seq OWNED BY public.encuesta.id;
          public          ecoa    false    223            �            1259    16627    grupo    TABLE     �   CREATE TABLE public.grupo (
    id integer NOT NULL,
    group_number character varying(100) NOT NULL,
    id_materia integer,
    teacher_id integer
);
    DROP TABLE public.grupo;
       public         heap    ecoa    false            �            1259    16626    grupo_id_seq    SEQUENCE     �   CREATE SEQUENCE public.grupo_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.grupo_id_seq;
       public          ecoa    false    222            q           0    0    grupo_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.grupo_id_seq OWNED BY public.grupo.id;
          public          ecoa    false    221            �            1259    16996    inscrito_en    TABLE     �   CREATE TABLE public.inscrito_en (
    id integer NOT NULL,
    grupo_id integer,
    student_id integer,
    contestado boolean DEFAULT false
);
    DROP TABLE public.inscrito_en;
       public         heap    ecoa    false            �            1259    16995    inscrito_en_id_seq    SEQUENCE     �   CREATE SEQUENCE public.inscrito_en_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.inscrito_en_id_seq;
       public          ecoa    false    230            r           0    0    inscrito_en_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.inscrito_en_id_seq OWNED BY public.inscrito_en.id;
          public          ecoa    false    229            �            1259    16620    materia    TABLE     c   CREATE TABLE public.materia (
    id integer NOT NULL,
    name character varying(100) NOT NULL
);
    DROP TABLE public.materia;
       public         heap    ecoa    false            �            1259    16619    materia_id_seq    SEQUENCE     �   CREATE SEQUENCE public.materia_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.materia_id_seq;
       public          ecoa    false    220            s           0    0    materia_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.materia_id_seq OWNED BY public.materia.id;
          public          ecoa    false    219            �            1259    16697    reporte    TABLE     a   CREATE TABLE public.reporte (
    id integer NOT NULL,
    resumen text,
    grupo_id integer
);
    DROP TABLE public.reporte;
       public         heap    ecoa    false            �            1259    16696    reporte_id_seq    SEQUENCE     �   CREATE SEQUENCE public.reporte_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.reporte_id_seq;
       public          ecoa    false    228            t           0    0    reporte_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.reporte_id_seq OWNED BY public.reporte.id;
          public          ecoa    false    227            �            1259    16606    students    TABLE     �   CREATE TABLE public.students (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    school_id character varying NOT NULL,
    password character varying(100) NOT NULL
);
    DROP TABLE public.students;
       public         heap    ecoa    false            �            1259    16605    students_id_seq    SEQUENCE     �   CREATE SEQUENCE public.students_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.students_id_seq;
       public          ecoa    false    216            u           0    0    students_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.students_id_seq OWNED BY public.students.id;
          public          ecoa    false    215            �            1259    16613    teachers    TABLE     �   CREATE TABLE public.teachers (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    school_id character varying NOT NULL,
    password character varying(100) NOT NULL
);
    DROP TABLE public.teachers;
       public         heap    ecoa    false            �            1259    16612    teachers_id_seq    SEQUENCE     �   CREATE SEQUENCE public.teachers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.teachers_id_seq;
       public          ecoa    false    218            v           0    0    teachers_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.teachers_id_seq OWNED BY public.teachers.id;
          public          ecoa    false    217            �           2604    16676    ecoa_individual id    DEFAULT     x   ALTER TABLE ONLY public.ecoa_individual ALTER COLUMN id SET DEFAULT nextval('public.ecoa_individual_id_seq'::regclass);
 A   ALTER TABLE public.ecoa_individual ALTER COLUMN id DROP DEFAULT;
       public          ecoa    false    225    226    226            �           2604    16804    encuesta id    DEFAULT     j   ALTER TABLE ONLY public.encuesta ALTER COLUMN id SET DEFAULT nextval('public.encuesta_id_seq'::regclass);
 :   ALTER TABLE public.encuesta ALTER COLUMN id DROP DEFAULT;
       public          ecoa    false    224    223    224            �           2604    16630    grupo id    DEFAULT     d   ALTER TABLE ONLY public.grupo ALTER COLUMN id SET DEFAULT nextval('public.grupo_id_seq'::regclass);
 7   ALTER TABLE public.grupo ALTER COLUMN id DROP DEFAULT;
       public          ecoa    false    222    221    222            �           2604    16999    inscrito_en id    DEFAULT     p   ALTER TABLE ONLY public.inscrito_en ALTER COLUMN id SET DEFAULT nextval('public.inscrito_en_id_seq'::regclass);
 =   ALTER TABLE public.inscrito_en ALTER COLUMN id DROP DEFAULT;
       public          ecoa    false    229    230    230            �           2604    16623 
   materia id    DEFAULT     h   ALTER TABLE ONLY public.materia ALTER COLUMN id SET DEFAULT nextval('public.materia_id_seq'::regclass);
 9   ALTER TABLE public.materia ALTER COLUMN id DROP DEFAULT;
       public          ecoa    false    219    220    220            �           2604    16700 
   reporte id    DEFAULT     h   ALTER TABLE ONLY public.reporte ALTER COLUMN id SET DEFAULT nextval('public.reporte_id_seq'::regclass);
 9   ALTER TABLE public.reporte ALTER COLUMN id DROP DEFAULT;
       public          ecoa    false    227    228    228            �           2604    16808    students id    DEFAULT     j   ALTER TABLE ONLY public.students ALTER COLUMN id SET DEFAULT nextval('public.students_id_seq'::regclass);
 :   ALTER TABLE public.students ALTER COLUMN id DROP DEFAULT;
       public          ecoa    false    216    215    216            �           2604    16809    teachers id    DEFAULT     j   ALTER TABLE ONLY public.teachers ALTER COLUMN id SET DEFAULT nextval('public.teachers_id_seq'::regclass);
 :   ALTER TABLE public.teachers ALTER COLUMN id DROP DEFAULT;
       public          ecoa    false    218    217    218            d          0    16673    ecoa_individual 
   TABLE DATA           F   COPY public.ecoa_individual (id, resumen, inscrito_en_id) FROM stdin;
    public          ecoa    false    226   �D       b          0    16640    encuesta 
   TABLE DATA           K   COPY public.encuesta (id, pregunta, respuesta, inscrito_en_id) FROM stdin;
    public          ecoa    false    224   �G       `          0    16627    grupo 
   TABLE DATA           I   COPY public.grupo (id, group_number, id_materia, teacher_id) FROM stdin;
    public          ecoa    false    222   L       h          0    16996    inscrito_en 
   TABLE DATA           K   COPY public.inscrito_en (id, grupo_id, student_id, contestado) FROM stdin;
    public          ecoa    false    230   =L       ^          0    16620    materia 
   TABLE DATA           +   COPY public.materia (id, name) FROM stdin;
    public          ecoa    false    220   �L       f          0    16697    reporte 
   TABLE DATA           8   COPY public.reporte (id, resumen, grupo_id) FROM stdin;
    public          ecoa    false    228   �L       Z          0    16606    students 
   TABLE DATA           A   COPY public.students (id, name, school_id, password) FROM stdin;
    public          ecoa    false    216   �Q       \          0    16613    teachers 
   TABLE DATA           A   COPY public.teachers (id, name, school_id, password) FROM stdin;
    public          ecoa    false    218   �R       w           0    0    ecoa_individual_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.ecoa_individual_id_seq', 32, true);
          public          ecoa    false    225            x           0    0    encuesta_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.encuesta_id_seq', 86, true);
          public          ecoa    false    223            y           0    0    grupo_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.grupo_id_seq', 4, true);
          public          ecoa    false    221            z           0    0    inscrito_en_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.inscrito_en_id_seq', 4, true);
          public          ecoa    false    229            {           0    0    materia_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.materia_id_seq', 3, true);
          public          ecoa    false    219            |           0    0    reporte_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.reporte_id_seq', 214, true);
          public          ecoa    false    227            }           0    0    students_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.students_id_seq', 7, true);
          public          ecoa    false    215            ~           0    0    teachers_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.teachers_id_seq', 3, true);
          public          ecoa    false    217            �           2606    16680 $   ecoa_individual ecoa_individual_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.ecoa_individual
    ADD CONSTRAINT ecoa_individual_pkey PRIMARY KEY (id);
 N   ALTER TABLE ONLY public.ecoa_individual DROP CONSTRAINT ecoa_individual_pkey;
       public            ecoa    false    226            �           2606    16647    encuesta encuesta_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.encuesta
    ADD CONSTRAINT encuesta_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.encuesta DROP CONSTRAINT encuesta_pkey;
       public            ecoa    false    224            �           2606    16632    grupo grupo_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.grupo
    ADD CONSTRAINT grupo_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.grupo DROP CONSTRAINT grupo_pkey;
       public            ecoa    false    222            �           2606    17001    inscrito_en inscrito_en_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.inscrito_en
    ADD CONSTRAINT inscrito_en_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.inscrito_en DROP CONSTRAINT inscrito_en_pkey;
       public            ecoa    false    230            �           2606    16625    materia materia_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.materia
    ADD CONSTRAINT materia_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.materia DROP CONSTRAINT materia_pkey;
       public            ecoa    false    220            �           2606    16704    reporte reporte_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.reporte
    ADD CONSTRAINT reporte_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.reporte DROP CONSTRAINT reporte_pkey;
       public            ecoa    false    228            �           2606    16611    students students_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.students DROP CONSTRAINT students_pkey;
       public            ecoa    false    216            �           2606    16618    teachers teachers_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.teachers
    ADD CONSTRAINT teachers_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.teachers DROP CONSTRAINT teachers_pkey;
       public            ecoa    false    218            �           2606    16990    grupo fk_teacher    FK CONSTRAINT     u   ALTER TABLE ONLY public.grupo
    ADD CONSTRAINT fk_teacher FOREIGN KEY (teacher_id) REFERENCES public.teachers(id);
 :   ALTER TABLE ONLY public.grupo DROP CONSTRAINT fk_teacher;
       public          ecoa    false    3512    218    222            �           2606    16633    grupo grupo_id_materia_fkey    FK CONSTRAINT        ALTER TABLE ONLY public.grupo
    ADD CONSTRAINT grupo_id_materia_fkey FOREIGN KEY (id_materia) REFERENCES public.materia(id);
 E   ALTER TABLE ONLY public.grupo DROP CONSTRAINT grupo_id_materia_fkey;
       public          ecoa    false    220    3514    222            �           2606    17002 %   inscrito_en inscrito_en_grupo_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.inscrito_en
    ADD CONSTRAINT inscrito_en_grupo_id_fkey FOREIGN KEY (grupo_id) REFERENCES public.grupo(id);
 O   ALTER TABLE ONLY public.inscrito_en DROP CONSTRAINT inscrito_en_grupo_id_fkey;
       public          ecoa    false    3516    230    222            �           2606    17007 '   inscrito_en inscrito_en_student_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.inscrito_en
    ADD CONSTRAINT inscrito_en_student_id_fkey FOREIGN KEY (student_id) REFERENCES public.students(id);
 Q   ALTER TABLE ONLY public.inscrito_en DROP CONSTRAINT inscrito_en_student_id_fkey;
       public          ecoa    false    230    216    3510            �           2606    16710    reporte reporte_grupo_id_fkey    FK CONSTRAINT     }   ALTER TABLE ONLY public.reporte
    ADD CONSTRAINT reporte_grupo_id_fkey FOREIGN KEY (grupo_id) REFERENCES public.grupo(id);
 G   ALTER TABLE ONLY public.reporte DROP CONSTRAINT reporte_grupo_id_fkey;
       public          ecoa    false    228    222    3516            d   �  x��T�n�0<K_�0��NҴ�����豗5��Y�T�or̡�"���,e7v��&������]��OV�����i|T�W���Յ�,%%�3i<'ղ�Q�p
q����xoIi����%Ҹ�~�4����i��5��!5�C�x�ʱ|��#�UG������������)�J�'Nkj��zy)%��� J�[n�������jط��>�� ը/�Ѧ�ln��+<U���!��ɤ؀��{)x�,��dK�5A	�h���h�#�ɭ����ýxk�MuU/�^�$��񶿕ͶPRA:��[�ڄ�,�qX�'�j�U����r�Q�{��lE|�~�<�#�q.�B�����ǐ�nT�l���:;�CX(��"�3>M�Mڐ�x n���}�}����#��5���^�T��}?L��v?�H�Վ�n��bq���/�廙R 	��J��2=H2�H���s^��h�z��.���Iq�/��F�%H&�$	{�+Z�ؖ����՛���:iR�Te��{'ݛכz/$�9L9	�E܄�'���H{w����;9�.��I$�	f�	�i���U���0uij����_L��̸؁ �Ҽ�6�/Kp/T�>�=)1E��`n���Z)GʴoEyiUIyLd�^ВXl����x:��R�v�ql�ּb_ )��e]��:Y��\�g4׭pQo����f      b     x��W�nG=�|E�a-\|��A���AN�g�T3��^Q��>�� �c~�á�p1dH�t#��_��zU=f���{l���(�L�WV��u����d��s�7�KR1�J_�,4�)�T��=~���J��׎/Ua��%;`��W<�"�s9F�Ԕ
�r*DE�cS����":oU4����mڞd�Y͢�kT�3�|�c�& ���A>=��Kl�`��r�f�jJ����'oq1�UE
�K*����B�ST5@
�3�T8]ǹ�D6���^�4|	�~ioj���pz�]�L*9Z����X����Y0?R\��K�������N�_qD�wx�0�0e�5%|`ɎA><xx.��p*9�� wt�D��A�J�j`ӄĸŧ��, ��ǹ�I��4+���0�@
������U�R�Q+�j�d������Kc,�$?=л��"Q��*�d��'�I���\�l��|8�	$jA,p7�Rt����pw0���5��K���Ni��N�Sɔ�I�m�Xz��D��E�/䴩GBr��dA�T�0|��O�UP.#�H#D��Z�R���܄N��QH���ǩu5@+95�*�h{=�xYc�g�:���/��e�|��ɲ�զ��ua�t�G�����^��O,t+\T��d��h��ߓ�O�.����:�(�أ����72ꌥ�t!LQT͠h��:a�G�%�)i���$����.�*}I�a-��ӭ%����1-|z������H6�G�O��`c� �~�|��<=����)��������%-�F"8�|ˠ��(i热����rU���N��6�)�X���6D3Flymĩ�B�W"*�}b��;�궳X�}J��;� W68��l፴�3J)��i ��Z�Fӗsee5`U�*mR�==�q9�SlE��4��6���WE��cL���#�D`"��C��ƕ:Z+����醶mO�{*K�m<���Ɨ�W�P?�ㄻ>�m��U��'�Ӹͤ��Wz������y�W�Fp���8�OqBD8��r�����E��� �.jG      `   +   x�3�430�4�4�2�L�,cNcN#N.��	W� �r       h   >   x���� ���0�wP���f��ˑ�W����T$#�4`�E�S�Ø<l<�)�W�}�B
�      ^      x�3�q640���2��u��b���� 8J'      f     x��V�n$7�W_�X,$��+1.�L0�C%=3�+�9�
����)1��1W7絫�|ۑ#�U�ռ��juC-��*�������c؇X������m�-ն��M
Ud�B2�S��[�LS��˭��;�%�N�l9���do�9&�P�1?3"����_�|��	}�{�L�pX����᎜�k\s�h�mO���gn��!#١�H�HYo���}ج�.�/�>���	�Kcu�go�y�\5R�_��1�,��]X��-�t$�"�ދ�ri���=.6T�Y��o�+q�Hjݮ�H�X#��<����j�k��%J{ �]$+I����IIo�}��1�6w9u3��bN���g���0�������fQ^ÈRSĝ!笃��h��I��w
��4�v�Z|͝u��B����	,�b��f)�O�c0����F�q�%��J7yP���F1�����2q&]�p��蟶�K���oWo��C�E)G]���z�U�)N�S��<Ry��yV�o�mmj!�����$��e�;\�7�[���H55��"4%����"�����sl-��FH�K���>�����2z�(�J E3�P۠�x0���~����	���r�S���͉��P`�d��z��!D��An��^��z,M�h�P��;|w(�w�z%a I�*57|���!8�X�U`�����iB���~�ҁƀ ).:7�%F�]�!	�q@�.���=��������ҭ�d��eTHL��Ob�NA�������U�)� La��Ӥ�G�q�q&[�a��>���klA��bp�V�?��;�6宄�4}M�"<M�a'[�'r Ñߝ쉻\�bJ1�
@�b����J�R��_ԫ��([��.��Ƶ�6�)�o��X��Dv4.�y��
�Qft �������z@�0����Y0K�w�{e��Nː-,�M�2V��Z:�p����|�i�N�'2 _��'�V7m�Τ���U�b�7T<~Y�Jt�i�I��b8���J�Jʲz�{�}���x��˖
��N��!Ǒ/QV�)[/�w���.�*��{��5�b�"B�?��"�~L0����]:�(��?C��P�L{��TT�RR�g���S�_ 4�~<r��mp}'N�`��?Pq�/W�8������.��1wy����I�B�K�W�ޅ�Vi6.�W���tJG�V�����QΝ<@��Ǚ����#eVlL)*��Nq&G}ux��`��>k�&k��~�:X_��?�d�n7��O�      Z   �   x�U�?�0�������?@;:(�89�<�!�BZ���� ���Ya �_�|T#���qh�)/2�ez��y�4��ќȻ��,�~,ϔTf��������n&Bp#V�S8�:��y���� �چL���I�$_Q�QIk��۹V�(������%���\w��/�0Mn      \   G   x�3�J,�QH-J���10���0�,H,..�/J�2�t-�K-.�WK�Iͫ*M�I�21�0AR���� B     