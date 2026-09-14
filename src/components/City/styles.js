import styled from "styled-components";
export const Intro=styled.div`text-align:center;margin:24px 0 8px;& p{margin:8px 0;color:rgba(255,255,255,.75);font-size:14px}`;
export const ChooseCityLabel=styled.h1`margin:0;font-size:clamp(25px,6vw,34px);line-height:1.1;color:white`;
export const SearchBox=styled.form`margin:12px 0;text-align:left;& label{display:block;margin:0 0 8px 4px;color:rgba(255,255,255,.75);font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.08em}& div{display:flex;gap:8px;padding:6px;border-radius:16px;background:rgba(255,255,255,.95)}& input{flex:1;min-width:0;border:0;outline:0;padding:12px;background:transparent;color:#19315e;font:inherit}& button{border:0;border-radius:12px;padding:0 18px;background:#102a56;color:white;font:inherit;font-weight:700;cursor:pointer}& button:disabled{opacity:.6;cursor:wait}`;
export const ErrorMessage=styled.p`margin:14px 4px 0;padding:12px;border-radius:12px;background:rgba(130,26,56,.32);font-size:13px`;
export const WelcomeWeatherLogo=styled.img`width:140px;height:140px;margin:40px auto`;
