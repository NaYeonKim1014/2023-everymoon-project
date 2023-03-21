import {Text, View} from 'react-native'
import styled from 'styled-components/native'

const Total = styled.SafeAreaView`
    background-color: #f1d5d4;
    flex: 1;
`

const Contents = styled.View`
    margin-left: 15px;
    margin-right: 15px;
    margin-top: 90px;
`
const Top = styled.Text`
    color: #294747;
    font-weight: 700;
    font-size: 40px;
`

const Btn = styled.TouchableOpacity`
    width: 100%;
    height: 61px;
    background: #294747;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    margin-top: 18px;
`

const BtnText = styled.Text`
    color: #ffffff;
    font-weight: 400;
    font-size: 24px;
`

const Block = styled.View`
    width: 100%;
    height: 46px;
`
const Middle = styled.Text`
    color: #294747;
    font-weight: 700;
    font-size: 30px;
    margin-top: 18px;
`
const Btn2 = styled.TouchableOpacity`
    width: 100%;
    height: 61px;
    border: 3px solid #294747;
    border-radius: 15px;
    display: flex;
    flex-direction : row;
    justify-content: center;
    align-items: center;
    align-items: center;
    margin-top: 18px;
`
const Btn2Text = styled.Text`
    width: 89px;
    height: 29px;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    color: #294747;
`

function Pastdate({navigation}) {
    return (
        <Total>
            <Contents>
                <Top>이전,</Top>
                <Top>월경날짜를</Top>
                <Top>입력해주세요.</Top>
                <Block />
                <Middle>월경 시작</Middle>
                <Btn2>
                    <Btn2Text>...</Btn2Text>
                </Btn2>
                <Middle>월경 끝</Middle>
                <Btn2>
                    <Btn2Text>...</Btn2Text>
                </Btn2>
                <Btn
                    onPress={() => {
                        navigation.push('Symptom')
                    }}    
                >
                    <BtnText>입력했어요</BtnText>
                </Btn>
                
            </Contents>
        </Total>
    )
}

export default Pastdate