import { posts } from './posts.mjs';
import { likedislike } from '.likedislike.mjs';

var arrayH = [
"Amorphophallus titanum",
"Anastatica hierochuntia",
"Dioanea Muscípula"];
var arrayP = [
"'Amorphophallus titanum, conhecido pelos nomes comuns de jarro-titã e flor-cadáver, é a espécie que produz um gigantesco espádice que se considera a maior inflorescência do mundo. Quando desabrocha, a inflore chega a atingir três metros de altura e pode pesar até 75 quilogramas.' - https://pt.wikipedia.org/wiki/Amorphophallus_titanum",
"'Anastatica is a monotypic genus with the type species Anastatica hierochuntica. The genus is a member of the family Brassicaceae (formerly Cruciferae), in the division Magnoliophyta of the class Magnoliopsida. The plant is a small gray annual herb that rarely grows above 15 centimetres (6 in) high, and bears minute white flowers. It is a tumbleweed and a resurrection plant.' - https://en.wikipedia.org/wiki/Anastatica",
"'A dioneia, também conhecida como apanha-moscas (Dionaea muscipula), é uma planta carnívora que pega e digere a presa animal (em geral insetos e aracnídeos). A estrutura de captura é formada por dois lóbulos unidos pela base e presos na ponta de cada uma das folhas.' - https://pt.wikipedia.org/wiki/Dioneia"];
var arrayImg = [
"https://upload.wikimedia.org/wikipedia/commons/4/40/Amorphophallus_titanum_with_3_flowers_-_Botanischer_Garten_Bonn.jpg", 
"https://cdn.pixabay.com/photo/2012/10/09/03/32/rose-of-jericho-60311_1280.jpg", 
"https://p0.pikist.com/photos/956/662/needed-to-catch-the-grass-dionaea-flies-software-download-venus-flytrap-dionaea-muscipula.jpg"];



const post = new posts(arrayH[0], arrayP[0], arrayImg[0]);
post.addPost(arrayH[1], arrayP[1], arrayImg[1]);
post.addPost(arrayH[2], arrayP[2], arrayImg[2]);
const ld = new likeDislike(document.getElementById("likebtn"));
