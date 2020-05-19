package com.jh.p.board.service;

import java.util.List;

import com.jh.p.board.vo.BoardVo;

public interface IBoardService {
    void boardRegister(BoardVo board);
	BoardVo boardSearch(int bno);
	int boardModify(BoardVo board);
    void boardDelete(int bno);
    
    List<BoardVo> boardShowAll() throws Exception;
    void increaseViewcnt(int bno) throws Exception ;
}