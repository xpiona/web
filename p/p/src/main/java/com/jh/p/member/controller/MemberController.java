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
// import org.springframework.web.servlet.ModelAndView;
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

	@ResponseBody
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public String login(@RequestBody MemberVo member, HttpSession session) {
		logger.info(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>LOGIN>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
		logger.info("memId is " + member.getMemId());
		MemberVo mem = service.memberSearch(member);
		if(mem == null){
			return "fail";}
		else{
			session.setAttribute("member", mem);
			return "success";}
	}

	@ResponseBody
	@RequestMapping(value = "/join", method = RequestMethod.POST)
	public String join(@RequestBody MemberVo member) {
		logger.info("=============================JOIN=================================");
		service.memberRegister(member);
		return "join_Success";
	}

	@ResponseBody
	@RequestMapping("/session")
    public MemberVo session(HttpServletRequest request) {
		logger.info("=============================SESSION=================================");
		HttpSession session = request.getSession();
		MemberVo member = (MemberVo) session.getAttribute("member");
		// logger.info(member.getMemId());
		return member;
	}

	//logout
	@ResponseBody
	@RequestMapping(value="/logout")
	public String logout(MemberVo member, HttpSession session) {
		session.invalidate();
		return "logout_success";
	}

	//modify
	@ResponseBody
	@RequestMapping(value = "/modify", method = RequestMethod.POST)
	public String modify(@RequestBody MemberVo member) {
		int result = service.memberModify(member);
		if(result == 0) {
			logger.info("fail");
			return "fail";
		}
		return "success";
	}

	// @RequestMapping(value = "/modifyForm")
	// public ModelAndView modifyForm(HttpServletRequest request) {
	// 	HttpSession session = request.getSession();
	// 	MemberVo member = (MemberVo) session.getAttribute("member");
	// 	ModelAndView mav = new ModelAndView();
	// 	mav.addObject("member", service.memberSearch(member));
	// 	mav.setViewName("/member/modifyForm");
	// 	return mav;
	// }

	//delete
	@ResponseBody
	@RequestMapping(value = "/delete", method = RequestMethod.POST)
	public String delete(@RequestBody MemberVo member) {
		service.memberDelete(member);
		return "success";
	}		

}