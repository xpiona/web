package com.jh.p.board.controller;

import com.jh.p.board.service.BoardService;
import com.jh.p.board.vo.BoardVo;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/board")
public class BoardController {
    
    private static final Logger logger = LoggerFactory.getLogger(BoardController.class);
    
    @Autowired
    BoardService service;

    @ResponseBody
	@RequestMapping(value = "/create", method = RequestMethod.POST)
	public String join(@RequestBody BoardVo board) {
		logger.info("=============================Create=================================");
		service.boardRegister(board);
		return "Create_Success";
	}


}