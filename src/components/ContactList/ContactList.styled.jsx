import styled from 'styled-components';
import { Modal, Input } from 'antd';
import { UserSwitchOutlined, PhoneOutlined } from '@ant-design/icons';

export const List = styled.ul`
  max-width: 370px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
  background-color: #f1f1dc;
`;

export const Item = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 16px;
`;

export const Avatar = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
  background-color: ${p => p.theme.colors.accentLight};
  border: solid 1px ${p => p.theme.colors.accentDark};
`;

export const ListBtnWrapp = styled.div`
  display: flex;
  gap: 5px;
  margin-left: auto;
`;

export const ListBtn = styled.button`
  width: 30px;
  padding: 3px;
  border-radius: 5px;
  border: none;
  background-color: ${p => p.theme.colors.accentLight};
  transition: all 0.2s ease-in-out;
  :hover,
  :focus {
    background-color: ${p => p.theme.colors.accentDark};
    color: #fff;
    box-shadow: -2px -2px 5px #fff,
      2px 2px 5px ${p => p.theme.colors.accentDark};
    svg {
      fill: #fff;
      stroke: #fff;
    }
  }
`;

export const Text = styled.p`
  text-align: center;
`;

export const ModalRedact = styled(Modal)`
  text-align: center;

  .ant-modal-content {
    width: 330px;
    position: absolute;
    top: 50%;
    left: 20%;
  }
`;

export const InputForm = styled(Input)`
  height: 40px;
  font-size: 18px;
  width: 100%;
  :nth-child(1) {
    margin-bottom: 12px;
  }
`;

export const UserIcon = styled(UserSwitchOutlined)`
  color: ${p => p.theme.colors.accentDark};
`;

export const PhoneIcon = styled(PhoneOutlined)`
  color: ${p => p.theme.colors.accentDark};
`;
