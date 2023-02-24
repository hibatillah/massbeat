import React, { useState, useEffect } from 'react';
import { PageTitle, SectionTitle } from "./Title";
import { TrainerCard, ProgramCard, MenuCard, AdsCard } from "./Card";
import NT from "./NotFound";
import Load from './Loading';

const Program = () => {
    const [trainers, setTrainers] = useState([]);
    const [programs, setPrograms] = useState([]);
    const [foods, setFoods] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    
    const dataTrainers = fetch('http://localhost:3001/trainers').then(res => res.json())
    const dataPrograms = fetch('http://localhost:3001/programs').then(res => res.json())
    const dataFoods = fetch('http://localhost:3001/foods').then(res => res.json())

    const allData = Promise.all([dataTrainers, dataPrograms, dataFoods]);
    
    useEffect(() => {
        allData.then(data => {
            setTrainers(data[0]);
            setPrograms(data[1]);
            setFoods(data[2]);
        })
        .catch(err => setError(true))
        .finally(() => setLoading(false))
    },[])
    
    return (
        <div className="program w-full overflow-hidden">
            <div  className="pl-2">
                <PageTitle title="Program" />
            </div>
            {loading && <Load />}
            {error && <NT />}
            <div className="flex flex-col z-0">
                <div className="trainer">
                    <SectionTitle title="Trainer" />
                    <div className="scroll-x">
                        {trainers.map((trainer) => (
                            <TrainerCard key={trainer.id} img={trainer.img} />
                        ))}
                    </div>
                </div>
                <div className="program">
                    <SectionTitle title="Program" />
                    <div className="scroll-x snap-x scroll-pl-2">
                        {programs.map((program) => (
                            <ProgramCard key={program.id}
                                title={program.title}
                                img={program.img} 
                                className="snap-start"
                            />
                        ))}
                    </div>
                    <div className="scroll-x snap-x scroll-pl-2 -mt-5">
                        {programs.map((program) => (
                            <ProgramCard key={program.id}
                                title={program.title}
                                img={program.img} 
                            />
                        ))}
                    </div>
                </div>
                <div className="food">
                    <SectionTitle title="Rekomendasi menu" />
                    <div className="grid grid-cols-2 gap-2 px-2 py-1">
                        {foods.map((food) => (
                            <MenuCard key={food.id}
                                title={food.title}
                                img={food.img} 
                            />
                        ))}
                    </div>
                </div>
            </div>
            {!loading &&
                <div className="px-2 mt-1">
                    <AdsCard />
                </div>
            }
        </div>
    )
}
export default Program;