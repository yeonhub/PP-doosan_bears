import React, { useContext } from 'react';
import { HeaderContext } from '../Header';

const DSProfileUI = () => {
    const { currentPlayer } = useContext(HeaderContext);
    const { no, name, birth, birth2, nation, eb, phy, po, pro } = currentPlayer

    return (
        <>
            <div className='con'>
                <table className='tb profile'>
                    <caption></caption>
                    <colgroup>
                        <col className='w1' />
                        <col className='w2' />
                    </colgroup>
                    <thead>
                        <tr>
                            <th colSpan={2} className='noth'>두산베어스 NO.{no}</th>
                        </tr>
                        <tr>
                            <th colSpan={2} className='nameth'>{name}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan={2}>출생</td>
                            <td>{birth}</td>
                        </tr>
                        <tr>
                            <td>{birth2}</td>
                        </tr>
                        <tr>
                            <td>국적</td>
                            <td>{nation}</td>
                        </tr>
                        <tr>
                            <td>학력</td>
                            <td>{eb}</td>
                        </tr>
                        <tr>
                            <td>신체</td>
                            <td>{phy}</td>
                        </tr>
                        <tr>
                            <td>포지션</td>
                            <td>{po}</td>
                        </tr>
                        <tr>
                            <td>프로입단</td>
                            <td>{pro}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default DSProfileUI;