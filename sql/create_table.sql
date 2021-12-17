create table if not exists stat
(
    id     int auto_increment
        primary key,
    nom    varchar(255)                       null,
    doigt1 int                                null,
    doigt2 int                                null,
    doigt3 int                                null,
    doigt4 int                                null,
    doigt5 int                                null,
    date   datetime default CURRENT_TIMESTAMP null
);

