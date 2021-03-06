package com.bld.framework.web.controller;

import java.beans.PropertyEditorSupport;
import java.util.Date;
import java.util.List;

import com.alibaba.fastjson.JSONObject;
import com.bld.project.system.user.domain.TbId;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.bld.common.utils.DateUtils;
import com.bld.common.utils.StringUtils;
import com.bld.common.utils.security.ShiroUtils;
import com.bld.common.utils.sql.SqlUtil;
import com.bld.framework.web.domain.AjaxResult;
import com.bld.framework.web.domain.AjaxResult.Type;
import com.bld.framework.web.page.PageDomain;
import com.bld.framework.web.page.TableDataInfo;
import com.bld.framework.web.page.TableSupport;
import com.bld.project.system.user.domain.User;

/**
 * web层通用数据处理
 * 
 * @author bld
 */
public class BaseController
{
    /**
     * 将前台传递过来的日期格式的字符串，自动转化为Date类型
     */
    @InitBinder
    public void initBinder(WebDataBinder binder)
    {
        // Date 类型转换
        binder.registerCustomEditor(Date.class, new PropertyEditorSupport()
        {
            @Override
            public void setAsText(String text)
            {
                setValue(DateUtils.parseDate(text));
            }
        });

        //传入的是json字符串转换为json对象
        binder.registerCustomEditor(JSONObject.class, new PropertyEditorSupport(){
            @Override
            public void setAsText(String text){
                setValue(StringUtils.isBlank(text) ? null : JSONObject.parseObject(text));
            }
        });

        //传入的是json字符串转换为TbId实体
        binder.registerCustomEditor(TbId.class, new PropertyEditorSupport(){
            @Override
            public void setAsText(String text){
                setValue(StringUtils.isBlank(text) ? null : JSONObject.parseObject(text, TbId.class));
            }
        });
    }

    /**
     * 设置请求分页数据
     */
    protected void startPage() {
        PageDomain pageDomain = TableSupport.buildPageRequest();
        Integer pageNum = pageDomain.getPageNum();
        Integer pageSize = pageDomain.getPageSize();
        if (StringUtils.isNotNull(pageNum) && StringUtils.isNotNull(pageSize)) {
/*
            String orderBy = SqlUtil.escapeOrderBySql(pageDomain.getOrderBy());
*/
            PageHelper.startPage(pageNum, pageSize);
        }
    }

  /*  *//**
     * 设置请求排序数据
     *//*
    protected void startOrderBy()
    {
        PageDomain pageDomain = TableSupport.buildPageRequest();
        if (StringUtils.isNotEmpty(pageDomain.getOrderBy()))
        {
            String orderBy = SqlUtil.escapeOrderBySql(pageDomain.getOrderBy());
            PageHelper.orderBy(orderBy);
        }
    }*/

    /**
     * 响应请求分页数据
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    protected TableDataInfo getDataTable(List<?> list)
    {
        TableDataInfo rspData = new TableDataInfo();
        rspData.setCode(0);
        rspData.setRows(list);
        rspData.setTotal(new PageInfo(list).getTotal());
        return rspData;
    }

    /**
     * 响应返回结果
     * 
     * @param rows 影响行数
     * @return 操作结果
     */
    protected AjaxResult toAjax(int rows)
    {
        return rows > 0 ? success() : error();
    }

    /**
     * 响应返回结果
     * 
     * @param result 结果
     * @return 操作结果
     */
    protected AjaxResult toAjax(boolean result)
    {
        return result ? success() : error();
    }

    /**
     * 返回成功
     */
    public AjaxResult success()
    {
        return AjaxResult.success();
    }

    /**
     * 返回失败消息
     */
    public AjaxResult error()
    {
        return AjaxResult.error();
    }

    /**
     * 返回成功消息
     */
    public AjaxResult success(String message)
    {
        return AjaxResult.success(message);
    }

    /**
     * 返回失败消息
     */
    public AjaxResult error(String message)
    {
        return AjaxResult.error(message);
    }

    /**
     * 返回错误码消息
     */
    public AjaxResult error(Type type, String message)
    {
        return new AjaxResult(type, message);
    }

    /**
     * 页面跳转
     */
    public String redirect(String url)
    {
        return StringUtils.format("redirect:{}", url);
    }

    public User getSysUser()
    {
        System.out.println("BaseController");
        return ShiroUtils.getSysUser();
    }

    public void setSysUser(User user)
    {
        ShiroUtils.setSysUser(user);
    }

    public Long getUserId()
    {
        return getSysUser().getUserId();
    }

    public String getLoginName()
    {
        return getSysUser().getLoginName();
    }
}
