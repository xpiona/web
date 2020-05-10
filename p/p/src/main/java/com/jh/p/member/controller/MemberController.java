package com.jh.p.member.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import com.jh.p.member.controller.MemberController;
import com.jh.p.member.service.MemberService;
import com.jh.p.member.vo.MemberVo;



@Controller
@RequestMapping("/member")
public class MemberController {
	
	private static final Logger logger = LoggerFactory.getLogger(MemberController.class);
	
	@Autowired
	MemberService service;
  
	@ModelAttribute("cp")
	public String getContextPath(HttpServletRequest request) {
		return request.getContextPath();
	}

	// Join
	@RequestMapping(value = "/joinForm")
	public String joinForm(@ModelAttribute("member") MemberVo member){
		return "member/joinForm";
	}

	@RequestMapping(value = "/join", method = RequestMethod.POST)
	public String joinReg(@ModelAttribute("member") MemberVo member) {	
		service.memberRegister(member);
		return "/member/joinOk";
	}
	
	//login
	@RequestMapping(value = "/loginForm")
	public String loginForm(@ModelAttribute("member") MemberVo member) {
		return "member/loginForm";
	}
	
	@ResponseBody
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public String login(@RequestBody MemberVo member, HttpSession session) {
		logger.info(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
		logger.info("memId is " + member.getMemId());
		MemberVo mem = service.memberSearch(member);
		if(mem == null)
			return "/member/loginForm";
		session.setAttribute("member", mem);
		return "/member/loginOk";
	}
	
	//modify
	@RequestMapping(value = "/modifyForm")
	public ModelAndView modifyForm(HttpServletRequest request) {
		
		HttpSession session = request.getSession();
		MemberVo member = (MemberVo) session.getAttribute("member");
		
		ModelAndView mav = new ModelAndView();
		mav.addObject("member", service.memberSearch(member));
		
		mav.setViewName("/member/modifyForm");
		
		return mav;
	}
	@RequestMapping(value = "/modify", method = RequestMethod.POST)
	public String modify(@ModelAttribute("member") MemberVo member) {
		int result = service.memberModify(member);
		if(result == 0) {
			logger.info("fail");
			return "/member/modifyForm";
		}
		return "member/modifyOk";
	}

}