

import React from 'react';

import "react-alice-carousel/lib/alice-carousel.css";
import './style.css'
import like from './../../assets/img/like.png';
import rate from './../../assets/img/rate.png';
import imgdelete from './../../assets/img/delete.jpg';
import edit from './../../assets/img/edit.png';

import {
    Carousel,
    initTE,
  } from "tw-elements";
  initTE({ Carousel });

    interface propType {
        items: {  
            id: number;
            title:string;
            poster: string;
            year: string;
            country: string;
            imdb_rating: string;
            genres: string[];
            images: string[];
          };
          onEdit: (id: number) => void;
          onDelete: (id: number) => void;
          setTitle?: (title: string) => void;
          selectedit?:number;
          index?:number;
      }
      
      const Card = (props:propType)=>{
          return(
              <div key={props.index} className='block w-72  p-3 m-2 relative rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700'>
                <img src={like} className="absolute w-5 h-5  right-6 top-6 z-50" alt=""/>
                    <div
                        id="carouselExampleIndicators"
                        className="relative"
                        data-te-carousel-init
                        data-te-carousel-slide>
                            <div
                                className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
                                data-te-carousel-indicators>

                                {props.items.images.map((item,index)=>{
                                    return(
                                        <button
                                        type="button"
                                        key={index}
                                        data-te-target="#carouselExampleIndicators"
                                        data-te-carousel-active
                                        className="mx-[3px] box-content h-[5px] w-[5px] rounded-xl flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                                        aria-label= {"Slide "+index}></button>
                                    )
                                })}
                            </div>

                            <div className="relative w-full h-52 overflow-hidden after:clear-both after:block after:content-['']">
                    
                                {props.items.images.map((item,index)=>{
                                    return(
                                    <div
                                    className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                                    data-te-carousel-item
                                    data-te-carousel-active
                                    key={index}
                                    >
                                    <img
                                        src={item}
                                        className="block w-full h-56"
                                        alt="Wild Landscape" />
                                    </div>
                                        
                                    )
                                })}
                    
                            </div>

                    </div>

                    <div className='flex justify-between'>
                        {props.selectedit === props.items.id?
                            <input
                                className="w-full text-lg border-gray-400 rounded-md m-1 border " type="text"
                                value={props.items.title}
                                onChange={()=>{}}
                            />
                        :
                            <p className='text-sm font-medium text-zinc-900'>{props.items.title}</p>
                        }
                        <div className='flex w-40 justify-end items-center'>
                            <img src={rate} className="w-6 h-5 pr-2" alt=""/>
                            <p>{props.items.imdb_rating}</p>
                        </div>
                    </div>

                    <p className='text-xs text-zinc-500'>{props.items.year}</p>
                    <p className='text-xs text-zinc-500'>{props.items.genres}</p>
                    <p className='text-xs text-zinc-500'>{props.items.country}</p>

                    <div  className='absolute bottom-3 right-2 flex justify-end'>
                        <div  className='w-6 h-5 ' onClick={props.onEdit.bind(null,props.items.id)}>
                            <img  src={edit} className="w-6 h-5 pr-2" alt=""/>
                        </div>
                        <div  className='w-6 h-5 ' onClick={props.onDelete.bind(null,props.items.id)} >
                            <img  src={imgdelete} className="w-6 h-5 pr-2" alt=""/>
                        </div>
                    </div>
        </div>
    )
}


export default Card;