package com.bld.project.sdpo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
public class QueryPo {
    private Integer pageSize;
    private Integer page;
    private String search;
    private String startTime;
    private String endTime;
    private String sortOrder;
    private String sortProperty;
    private String customerId;
    private String type;
}
