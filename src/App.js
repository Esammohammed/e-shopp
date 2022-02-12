import React, { useState ,useRef } from "react";
import "./App.css";
import Products from "./Products";
import Filter from "./Filter"
import Rec from "./UI/Rec";

const App = () => {
  const products = [
    {
      product_name: "Facebook Inc",
      brand_name: "Facebook",
      price: 1000,
      address: { state: "Assam", city: "Silchar" },
      discription: "Its a good product",
      date: "2012-01-20T13:26:55.424Z",
      time: "2020-01-27T22:54:31.624Z",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png",
    },
    {
      product_name: "Saudi Aramco",
      brand_name: "Saudi",
      price: 100,
      address: { state: "Karnataka", city: "Tumkur" },
      discription: "Its a good product",
      date: "2015-08-12T06:43:53.300Z",
      time: "2017-02-01T00:05:34.449Z",
      image:
        "https://www.researchgate.net/profile/Serge-Belongie/publication/221362362/figure/fig2/AS:305566657335318@1449864176496/Sample-of-in-vitro-images-for-different-products.png",
    },
    {
      product_name: "Facebook Inc",
      brand_name: "Facebook",
      price: 1000,
      address: { state: "Assam", city: "Bongaigaon" },
      discription: "Its a good product",
      date: "2019-02-17T04:09:22.584Z",
      time: "2013-07-08T16:24:06.368Z",
      image:
        "https://www.researchgate.net/profile/Serge-Belongie/publication/221362362/figure/fig2/AS:305566657335318@1449864176496/Sample-of-in-vitro-images-for-different-products.png",
    },
    {
      product_name: "Saudi Aramco",
      brand_name: "Saudi",
      price: 100,
      address: { state: "Rajasthan", city: "Rajgarh (Alwar)" },
      discription: "Its a good product",
      date: "2018-12-12T19:44:20.299Z",
      time: "2019-05-17T10:27:36.554Z",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png",
    },
    {
      product_name: "Saudi Aramco",
      brand_name: "Saudi",
      price: 100,
      address: { state: "Rajasthan", city: "Pali" },
      discription: "Its a good product",
      date: "2017-09-19T18:03:44.583Z",
      time: "2018-11-26T02:55:46.104Z",
      image:
        "https://toppng.com/uploads/preview/sitemap-infos-transparent-i-phone-x-phone-in-hand-11563198189tafc9ocrkg.png",
    },
    {
      product_name: "Facebook Inc",
      brand_name: "Facebook",
      price: 1000,
      address: { state: "Assam", city: "Tinsukia" },
      discription: "Its a good product",
      date: "2018-08-06T13:14:47.239Z",
      time: "2014-08-30T15:40:36.428Z",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png",
    },
    {
      product_name: "Saudi Aramco",
      brand_name: "Saudi",
      price: 100,
      address: { state: "Rajasthan", city: "Nathdwara" },
      discription: "Its a good product",
      date: "2017-06-01T18:25:59.925Z",
      time: "2016-09-14T19:42:50.959Z",
      image:
        "https://toppng.com/uploads/preview/sitemap-infos-transparent-i-phone-x-phone-in-hand-11563198189tafc9ocrkg.png",
    },
    {
      product_name: "Saudi Aramco",
      brand_name: "Saudi",
      price: 100,
      address: { state: "Punjab", city: "Nabha" },
      discription: "Its a good product",
      date: "2019-08-27T04:58:13.716Z",
      time: "2022-01-19T07:14:55.761Z",
      image:
        "https://png.pngtree.com/png-clipart/20190920/original/pngtree-chemical-glass-product-illustration-png-image_4626884.jpg",
    },
    {
      product_name: "Facebook Inc",
      brand_name: "Facebook",
      price: 1000,
      address: { state: "Assam", city: "Dibrugarh" },
      discription: "Its a good product",
      date: "2017-02-10T02:15:57.483Z",
      time: "2017-11-28T14:51:24.084Z",
      image:
        "https://png.pngtree.com/png-clipart/20190920/original/pngtree-chemical-glass-product-illustration-png-image_4626884.jpg",
    },
    {
      product_name: "Saudi Aramco",
      brand_name: "Saudi",
      price: 100,
      address: { state: "Dadra and Nagar Haveli", city: "Silvassa" },
      discription: "Its a good product",
      date: "2018-06-16T03:02:00.113Z",
      time: "2020-04-09T00:57:11.170Z",
      image:
        "https://www.pngall.com/wp-content/uploads/2016/05/Phone-Download-PNG.png",
    },
    {
      product_name: "Saudi Aramco",
      brand_name: "Saudi",
      price: 100,
      address: { state: "Rajasthan", city: "Sambhar" },
      discription: "Its a good product",
      date: "2019-12-21T15:03:08.188Z",
      time: "2012-07-18T14:57:57.940Z",
      image:
        "https://w7.pngwing.com/pngs/915/345/png-transparent-multicolored-balloons-illustration-balloon-balloon-free-balloons-easter-egg-desktop-wallpaper-party-thumbnail.png",
    },
    {
      product_name: "Saudi Aramco",
      brand_name: "Saudi",
      price: 100,
      address: { state: "Rajasthan", city: "Alwar" },
      discription: "Its a good product",
      date: "2022-01-07T15:50:10.457Z",
      time: "2019-05-17T11:16:05.135Z",
      image:
        "https://png.pngtree.com/png-clipart/20190920/original/pngtree-chemical-glass-product-illustration-png-image_4626884.jpg",
    },
    {
      product_name: "Saudi Aramco",
      brand_name: "Saudi",
      price: 100,
      address: { state: "Karnataka", city: "Tarikere" },
      discription: "Its a good product",
      date: "2017-03-15T04:04:20.101Z",
      time: "2015-06-25T01:54:15.258Z",
      image:
        "https://www.researchgate.net/profile/Serge-Belongie/publication/221362362/figure/fig2/AS:305566657335318@1449864176496/Sample-of-in-vitro-images-for-different-products.png",
    },
    {
      product_name: "Facebook Inc",
      brand_name: "Facebook",
      price: 1000,
      address: { state: "Assam", city: "Tezpur" },
      discription: "Its a good product",
      date: "2013-10-21T01:40:00.965Z",
      time: "2012-11-11T11:42:09.973Z",
      image:
        "https://png.pngtree.com/png-clipart/20190920/original/pngtree-chemical-glass-product-illustration-png-image_4626884.jpg",
    },
    {
      product_name: "Alphabet inc",
      brand_name: "Alphabet",
      price: 400,
      address: { state: "Meghalaya", city: "Tura" },
      discription: "Its a good product",
      date: "2020-04-28T15:50:19.924Z",
      time: "2020-04-23T15:20:37.333Z",
      image:
        "https://w7.pngwing.com/pngs/915/345/png-transparent-multicolored-balloons-illustration-balloon-balloon-free-balloons-easter-egg-desktop-wallpaper-party-thumbnail.png",
    },
    {
      product_name: "Saudi Aramco",
      brand_name: "Saudi",
      price: 100,
      address: { state: "Chhattisgarh", city: "Dhamtari" },
      discription: "Its a good product",
      date: "2014-09-11T13:45:42.497Z",
      time: "2012-02-10T15:24:52.788Z",
      image:
        "https://w7.pngwing.com/pngs/915/345/png-transparent-multicolored-balloons-illustration-balloon-balloon-free-balloons-easter-egg-desktop-wallpaper-party-thumbnail.png",
    },
    {
      product_name: "Saudi Aramco",
      brand_name: "Saudi",
      price: 100,
      address: { state: "Karnataka", city: "Athni" },
      discription: "Its a good product",
      date: "2018-08-01T17:32:14.140Z",
      time: "2018-12-21T22:22:23.168Z",
      image:
        "https://w7.pngwing.com/pngs/915/345/png-transparent-multicolored-balloons-illustration-balloon-balloon-free-balloons-easter-egg-desktop-wallpaper-party-thumbnail.png",
    },
    {
      product_name: "Saudi Aramco",
      brand_name: "Saudi",
      price: 100,
      address: { state: "Rajasthan", city: "Phalodi" },
      discription: "Its a good product",
      date: "2021-11-09T07:16:25.211Z",
      time: "2021-02-21T07:19:45.805Z",
      image:
        "https://www.pngall.com/wp-content/uploads/2016/05/Phone-Download-PNG.png",
    },
    {
      product_name: "Saudi Aramco",
      brand_name: "Saudi",
      price: 100,
      address: { state: "Rajasthan", city: "Rajaldesar" },
      discription: "Its a good product",
      date: "2020-06-30T06:46:34.383Z",
      time: "2012-11-10T10:14:03.776Z",
      image:
        "https://www.pngall.com/wp-content/uploads/2016/05/Phone-Download-PNG.png",
    },
    {
      product_name: "Saudi Aramco",
      brand_name: "Saudi",
      price: 100,
      address: { state: "Karnataka", city: "Sakaleshapura" },
      discription: "Its a good product",
      date: "2014-12-10T02:10:15.014Z",
      time: "2018-02-26T05:02:49.790Z",
      image:
        "https://w7.pngwing.com/pngs/915/345/png-transparent-multicolored-balloons-illustration-balloon-balloon-free-balloons-easter-egg-desktop-wallpaper-party-thumbnail.png",
    },
    {
      product_name: "Saudi Aramco",
      brand_name: "Saudi",
      price: 100,
      address: { state: "Rajasthan", city: "Pratapgarh" },
      discription: "Its a good product",
      date: "2021-06-04T21:20:40.162Z",
      time: "2021-08-12T22:23:18.523Z",
      image:
        "https://w7.pngwing.com/pngs/915/345/png-transparent-multicolored-balloons-illustration-balloon-balloon-free-balloons-easter-egg-desktop-wallpaper-party-thumbnail.png",
    },
    {
      product_name: "Facebook Inc",
      brand_name: "Facebook",
      price: 1000,
      address: { state: "Assam", city: "Guwahati" },
      discription: "Its a good product",
      date: "2015-03-15T19:59:06.180Z",
      time: "2017-12-20T19:36:12.461Z",
      image:
        "https://w7.pngwing.com/pngs/915/345/png-transparent-multicolored-balloons-illustration-balloon-balloon-free-balloons-easter-egg-desktop-wallpaper-party-thumbnail.png",
    },
    {
      product_name: "Saudi Aramco",
      brand_name: "Saudi",
      price: 100,
      address: { state: "Chhattisgarh", city: "Raipur" },
      discription: "Its a good product",
      date: "2020-06-25T13:20:34.739Z",
      time: "2022-01-18T22:56:51.462Z",
      image:
        "https://w7.pngwing.com/pngs/915/345/png-transparent-multicolored-balloons-illustration-balloon-balloon-free-balloons-easter-egg-desktop-wallpaper-party-thumbnail.png",
    },
    {
      product_name: "Saudi Aramco",
      brand_name: "Saudi",
      price: 100,
      address: { state: "Karnataka", city: "Sanduru" },
      discription: "Its a good product",
      date: "2013-12-08T23:59:03.745Z",
      time: "2016-06-16T22:12:44.980Z",
      image:
        "https://toppng.com/uploads/preview/sitemap-infos-transparent-i-phone-x-phone-in-hand-11563198189tafc9ocrkg.png",
    },
    {
      product_name: "Saudi Aramco",
      brand_name: "Saudi",
      price: 100,
      address: { state: "Jammu and Kashmir", city: "Anantnag" },
      discription: "Its a good product",
      date: "2014-08-18T03:22:50.549Z",
      time: "2013-01-31T20:01:31.590Z",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png",
    },
    {
      product_name: "Saudi Aramco",
      brand_name: "Saudi",
      price: 100,
      address: { state: "Punjab", city: "Zirakpur" },
      discription: "Its a good product",
      date: "2017-09-19T19:41:39.835Z",
      time: "2016-08-23T01:12:24.627Z",
      image:
        "https://www.pngall.com/wp-content/uploads/2016/05/Phone-Download-PNG.png",
    },
    {
      product_name: "Saudi Aramco",
      brand_name: "Saudi",
      price: 100,
      address: { state: "Rajasthan", city: "Neem-Ka-Thana" },
      discription: "Its a good product",
      date: "2019-03-21T17:33:38.778Z",
      time: "2021-02-01T23:42:28.943Z",
      image:
        "https://toppng.com/uploads/preview/sitemap-infos-transparent-i-phone-x-phone-in-hand-11563198189tafc9ocrkg.png",
    },
    {
      product_name: "Facebook Inc",
      brand_name: "Facebook",
      price: 1000,
      address: { state: "Assam", city: "Barpeta" },
      discription: "Its a good product",
      date: "2016-10-29T17:40:46.700Z",
      time: "2014-11-10T02:10:50.563Z",
      image:
        "https://w7.pngwing.com/pngs/915/345/png-transparent-multicolored-balloons-illustration-balloon-balloon-free-balloons-easter-egg-desktop-wallpaper-party-thumbnail.png",
    },
    {
      product_name: "Saudi Aramco",
      brand_name: "Saudi",
      price: 100,
      address: { state: "Assam", city: "Guwahati" },
      discription: "Its a good product",
      date: "2021-03-04T20:18:43.844Z",
      time: "2018-01-26T09:08:10.443Z",
      image:
        "https://png.pngtree.com/png-clipart/20190920/original/pngtree-chemical-glass-product-illustration-png-image_4626884.jpg",
    },
    {
      product_name: "Facebook Inc",
      brand_name: "Facebook",
      price: 1000,
      address: { state: "Assam", city: "Diphu" },
      discription: "Its a good product",
      date: "2015-04-28T18:30:49.207Z",
      time: "2016-08-28T00:08:05.744Z",
      image:
        "https://www.pngall.com/wp-content/uploads/2016/05/Phone-Download-PNG.png",
    },
  ];
  return (
    <div className="app">
      <div className="Left">

      <Filter products = {products} ></Filter>
      </div>
      <div className="Right">
      <Products products = {products}></Products>
      </div>
    </div>
  );
};

export default App;
