import React from 'react';
import BannerHome from '../components/BannerHome';
import { useSelector } from 'react-redux';
import HorizontalScrollCard from '../components/HorizontalScrollCard';
import useFetch from '../hooks/useFetch';

const Home = () => {
    const trendingData = useSelector(state => state.movieoData.bannerData);
    const { data : nowPlayingData } = useFetch('/movie/now_playing');
    const { data : topRatedData } = useFetch('/movie/top_rated');
    const { data : popularTvShowData } = useFetch('/tv/popular');
    const { data : onTheAirShowData } = useFetch('/tv/on_the_air');

    return (
        <div>
            <BannerHome />
            <HorizontalScrollCard data={trendingData} heading={"Tendencia"} trending={true} />
            <HorizontalScrollCard data={nowPlayingData} heading={"Viendo ahora"} media_type={"movie"}/>
            <HorizontalScrollCard data={topRatedData} heading={"Mejor calificadas"} media_type={"movie"}/>
            <HorizontalScrollCard data={popularTvShowData} heading={"TV Shows populares"} media_type={"tv"}/>
            <HorizontalScrollCard data={onTheAirShowData} heading={"En vivo"} media_type={"tv"}/>
        </div>
    )
}

export default Home;