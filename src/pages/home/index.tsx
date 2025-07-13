import { useState } from "react";
import Paper from "../../components/paper/Paper";
import OptionItem from "../../components/select/OptionItem";
import Select from "../../components/select/Select";
import { filterOptions } from "../../utils/constants";
import { items } from "../../utils/mock-data";
import Card from "../../components/card/Card";
import Pagination from "../../components/pagination/Pagination";
import Input from "../../components/input/Input";

export default function Home() {

    const [showOptions, setShowOptions] = useState(false)

    return (
        <div className="home-container">
            <span style={{ fontSize: "36px", fontWeight: '700', color: '#fcfcfc' }}>Condimentum consectetur</span>
            <div style={{ display: 'flex', gap: '10px', flexDirection: 'row', justifyContent: 'space-between', width: "100%" }}>
                <Select
                    startAddorment={<img src="/circle-sword.svg" width={"30px"} height={"30px"} alt="sword" />}
                    arrowIcon={<div style={{ width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img src="/arrow-white.svg" alt="arrow" style={{ width: '12px', height: '6px' }}></img>
                    </div>}
                    style={{
                        backgroundColor: 'rgba(57, 64, 90, 0.6)',
                        borderRadius: 4,
                        flexShrink: 1,
                        flexGrow: 1,
                        height: '60px',
                    }}
                    selectedVal={"Select a game"}
                />

                <Input
                    startAddornment={<img src="/icons8-search-30.png" width={'30px'} height={"30px"} alt="search" />}
                    style={{
                        backgroundColor: 'rgba(57, 64, 90, 0.6)',
                        borderRadius: 4,
                        flexShrink: 4,
                        flexGrow: 4
                    }}
                />

                <div style={{display: 'flex'}}>
                    <Select
                        startAddorment={<img src="/icons8-search-30.png" alt="search" />}
                        style={{
                            backgroundColor: 'rgba(57, 64, 90, 0.6)',
                            borderRadius: '4px 0px 0px 4px',
                            borderRight: '1px solid #4C6085',
                            flexShrink: 1,
                            flexGrow: 1
                        }}
                        arrowIcon={<div style={{ width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img src="/arrow-white.svg" alt="arrow" style={{ width: '12px', height: '6px' }}></img>
                        </div>}
                        float="Price"
                        selectedVal={"All"}
                    />
                    <Select
                        startAddorment={<img src="/icons8-search-30.png" alt="search" />}
                        style={{
                            backgroundColor: 'rgba(57, 64, 90, 0.6)',
                            borderRadius: '0px 4px 4px 0px',
                            flexShrink: 1,
                            flexGrow: 1
                        }}
                        arrowIcon={<div style={{ width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img src="/arrow-white.svg" alt="arrow" style={{ width: '12px', height: '6px' }}></img>
                        </div>}
                        float="Item Type"
                        selectedVal={'All'}
                    />
                </div>
            </div>
            <Paper>
                <div className="paper-header">
                    <span style={{ color: '#FFFFFF', fontWeight: 200 }}>Showing 20 - from 125</span>
                    <Select
                        startAddorment={
                            <img src="/filter.svg" alt="/" style={{ marginLeft: '12px', marginRight: '12px', width: '24px', height: '24px' }} />
                        }
                        arrowIcon={
                            <div style={{ width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src="/arrow-white.svg" alt="arrow" style={{ width: '12px', height: '6px' }}></img>
                            </div>
                        }
                        onClick={() => { setShowOptions(!showOptions) }}
                        selectedVal={"Featured"}
                        float="Sort By"
                    >
                        {
                            showOptions && filterOptions.map((option, index) => {
                                return (
                                    <OptionItem
                                        key={index}
                                        content={option.content}
                                        value={String(option.value)}
                                        onSelect={() => { }}
                                        setShow={setShowOptions}
                                        show={showOptions}
                                    ></OptionItem>
                                )
                            })
                        }
                    </Select>
                </div>

                <div className="home-card-box">
                    {
                        items.map((item, index) => {
                            return (
                                <Card key={index} item={item} />
                            )
                        })
                    }
                </div>

                <div>
                    <Pagination pages={8} currentPagge={8} handleNext={() => { }} handlePrev={() => { }} setCurrentPage={() => { }} />
                </div>
            </Paper>
        </div>
    )
}