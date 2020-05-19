package com.jh.p.board.service;

import java.util.List;

import com.jh.p.board.dao.BoardDao;
import com.jh.p.board.vo.BoardVo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import oracle.security.o5logon.d;

@Service
public class BoardService implements IBoardService{

    @Autowired
	BoardDao dao;

    @Override
    public void boardRegister(BoardVo board){
        dao.boardInsert(board);
    }

    @Override
	public BoardVo boardSearch(int bno){
        BoardVo b = dao.boardSelect(bno);
        if(b ==null){
            System.out.println("service : Select Fail!!");
        } else {
            System.out.println("service : Select Success!!");
        }
        return b;
    }

    @Override
	public int boardModify(BoardVo board){
        return dao.boardModify(board);
    }

    @Override
    public void boardDelete(int bno){
        dao.boardDelete(bno);
    }
    
    @Override
    public List<BoardVo> boardShowAll() throws Exception {
        return dao.boardListAll();
    }

    @Override
    public void increaseViewcnt(int bno) throws Exception {
        dao.increaseViewcnt(bno);
    }

}